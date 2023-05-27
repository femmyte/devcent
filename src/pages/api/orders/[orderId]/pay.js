import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import User from "models/User";
import Order from "models/Order";
import { validatePayment } from "lib/validations/orderValidation";
import { isLogin, isStudent } from "lib/middleware/auth";
import { router, handler } from "lib/helpers/router";

// @description: User make payment
// @Endpoint: api/orders/:orderId/pay
// @AccessType: private/student
async function pay(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "POST")) {
      return;
    }

    console.log(req.body);
    const error = await validatePayment(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const order = await Order.findOne({ orderId: req.query.orderId });
    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Invalid order",
      });
    }

    const { amount, transaction_id, created_at, flw_ref, status } = req.body;
    if (status !== "successful" || amount !== order.payments[0].amount) {
      return res.status(400).json({
        success: false,
        message: "Not a valid payment",
      });
    }

    const user = await User.findById(req.user._id);

    // order update
    order.status = status;
    order.payments = [
      {
        ...order.payments[0],
        status,
        transaction_id,
        created_at,
        flw_ref,
      },
    ];
    await order.save();

    //update user
    user.enrolledCourses.push(order.course);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Payment successful",
      orderId: order.orderId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

router.post(isLogin, isStudent, pay);

export default handler();

export const config = {
  api: {
    bodyParser: false,
  },
};
