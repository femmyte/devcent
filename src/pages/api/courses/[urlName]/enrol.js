import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { generateId } from "lib/utils/random";
import Course from "models/Course";
import Payment from "models/Payment";
import { validatePaymentInfo } from "lib/validations/paymentValidation";
import { isLogin, isStudent } from "lib/middleware/auth";
import { router, handler } from "lib/helpers/router";
import axios from "axios";

const client_url = process.env.NEXT_PUBLIC_CLIENT_URL;

// @description: User enrol in course
// @Endpoint: api/courses/:urlName/enrol
// @AccessType: private/student

async function enrolInCourse(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "POST")) {
      return;
    }

    console.log(req.body);
    const error = await validatePaymentInfo(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const query = {
      $regex: req.query.urlName,
      $options: "i",
    };
    const course = await Course.findOne({ urlName: query });
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }
    if (course.courseId !== req.body.courseId) {
      return res.status(400).json({
        success: false,
        message: "Invalid course",
      });
    }

    const tx_ref = generateId(15);
    const amount =
      req.body.paymentPlan === "part-payment"
        ? parseInt((course.discountFee / 2).toFixed(2))
        : parseInt(course.discountFee);
    // initiate payment
    const { data } = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      {
        tx_ref: tx_ref,
        amount: amount,
        currency: "NGN",
        redirect_url: `${client_url}/courses/${course.urlName}/payment`,
        meta: {
          paymentPlan: req.body.paymentPlan,
          courseId: course.courseId,
          userId: req.user.userId,
          country: req.body.country,
          city: req.body.city,
          address: req.body.address,
          province: req.body.province,
          postalCode: req.body.postalCode,
        },
        customer: {
          name: `${req.body.firstName} ${req.body.lastName}`,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
        },
      }
    );

    console.log(data);

    // const payment = await Payment.create({
    //   paymentId,
    //   course: course._id,
    //   user: req.user._id,
    //   amount: course.discountFee,
    //   status: "pending",
    //   payerInfo: {
    //     name: `${req.body.firstName} ${req.body.lastName}`,
    //     email: req.body.email,
    //     phoneNumber: req.body.phoneNumber,
    // country: req.body.country,
    // city: req.body.city,
    // address: req.body.address,
    // province: req.body.province,
    // postalCode: req.body.postalCode,
    //   },
    //   payments: [
    //     {
    //       paymentPlan: req.body.paymentPlan,
    //       amount:
    // req.body.paymentPlan === "part-payment"
    //   ? parseInt((course.discountFee / 2).toFixed(2))
    //   : parseInt(course.discountFee),
    //     },
    //   ],
    // });

    res.status(200).json({ redirect: data.data.link });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

router.post(isLogin, isStudent, enrolInCourse);

export default handler();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
