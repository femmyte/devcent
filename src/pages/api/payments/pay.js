import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import User from "models/User";
import Payment from "models/Payment";
import { validatePayment } from "lib/validations/paymentValidation";
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

    // verify payment

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

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
