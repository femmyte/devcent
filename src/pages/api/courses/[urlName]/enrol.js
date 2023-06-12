import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { generateId } from "lib/utils/random";
import Course from "models/Course";
import Payment from "models/Payment";
import { validatePaymentInfo } from "lib/validations/paymentValidation";
import { isLogin, isStudent } from "lib/middleware/auth";
import { router, handler } from "lib/helpers/router";
import axios from "axios";

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

    const paymentId = generateId(16);

    // initiate payment
    const { data } = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      {
        tx_ref: paymentId,
        amount: course.discountFee,
        currency: "NGN",
        redirect_url: `http://localhost:3000/courses/${course.urlName}/payment`,
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
          email: req.body.email,
          phonenumber: req.body.phoneNumber,
          name: `${req.body.firstName} ${req.body.lastName}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
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
    //     country: req.body.country,
    //     city: req.body.city,
    //     address: req.body.address,
    //     province: req.body.province,
    //     postalCode: req.body.postalCode,
    //   },
    //   payments: [
    //     {
    //       paymentPlan: req.body.paymentPlan,
    //       amount:
    //         req.body.paymentPlan === "part-payment"
    //           ? parseInt((course.discountFee / 2).toFixed(2))
    //           : parseInt(course.discountFee),
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
