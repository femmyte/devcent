import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import User from "models/User";
import Order from "models/Order";
import { validatePayment } from "lib/validations/orderValidation";
import { isLogin, isStudent } from "lib/middleware/auth";
import { router, handler } from "lib/helpers/router";

// @description: User pay balance
// @Endpoint: api/orders/:orderId/pay-balance
// @AccessType: private/student
async function payBalance(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "PUT")) {
      return;
    }

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

    // order update
    order.payments.push({
      paymentPlan: "part-payment",
      amount,
      status,
      transaction_id,
      created_at,
      flw_ref,
    });
    await order.save();

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

router.post(isLogin, isStudent, payBalance);

export default handler();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
