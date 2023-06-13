import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import User from "models/User";
import Payment from "models/Payment";
import Flutterwave from "flutterwave-node-v3";
import { validatePayment } from "lib/validations/paymentValidation";
import { isLogin, isStudent } from "lib/middleware/auth";
import { router, handler } from "lib/helpers/router";
import Course from "models/Course";

// @description: User make payment
// @Endpoint: api/payments/process-payment
// @AccessType: private/student
async function processPayment(req, res) {
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

    const course = await Course.findOne({ urlName: req.body.course });
    if (!course) {
      return res.status(400).json({
        success: false,
        message: "Invalid course",
      });
    }

    // verify payment
    const flw = new Flutterwave(
      process.env.FLW_TEST_PUBLIC_KEY,
      process.env.FLW_TEST_SECRET_KEY
    );
    const { data } = await flw.Transaction.verify({
      id: req.body.transaction_id,
    });
    console.log(data);
    const expectedAmount =
      data.meta.paymentPlan === "part-payment"
        ? parseInt((course.discountFee / 2).toFixed(2))
        : parseInt(course.discountFee);
    if (
      data.status !== "successful" ||
      data.amount !== expectedAmount ||
      data.currency !== "NGN" ||
      data.meta.courseId !== course.courseId ||
      data.meta.userId !== req.user.userId
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment unsuccessful",
      });
    }

    // const user = await User.findById(req.user._id);

    // // order update
    // order.status = status;
    // order.payments = [
    //   {
    //     ...order.payments[0],
    //     status,
    //     transaction_id,
    //     created_at,
    //     flw_ref,
    //   },
    // ];
    // await order.save();

    // //update user
    // user.enrolledCourses.push(order.course);
    // await user.save();

    res.status(200).json({
      success: true,
      message: "Payment successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

router.post(isLogin, isStudent, processPayment);

export default handler();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
