import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import Payment from "models/Payment";
import { router, handler } from "lib/helpers/router";
import { isLogin, isStudent } from "lib/middleware/auth";

// @description: Get payment
// @Endpoint: api/payment/:paymentId/payment
// @AccessType: private/student
async function getPayment(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "GET")) {
      return;
    }

    const payment = await Payment.findOne({
      paymentId: req.query.paymentId,
    }).populate({
      path: "course",
      select: "-enrolledUsers -description",
    });
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

router.get(isLogin, isStudent, getPayment);

export default handler();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
