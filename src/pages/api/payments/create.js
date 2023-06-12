import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { generateId } from "lib/utils/random";
import Course from "models/Course";
import Order from "models/Order";
import { validateOrder } from "lib/validations/paymentValidation";
import { isLogin, isStudent } from "lib/middleware/auth";
import { router, handler } from "lib/helpers/router";

// @description: User create order
// @Endpoint: api/orders/create
// @AccessType: private/student

async function createOrder(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "POST")) {
      return;
    }

    console.log(req.body);
    const error = await validateOrder(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const course = await Course.findOne({ courseId: req.body.courseId });
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    const orderId = generateId(16);

    const order = await Order.create({
      orderId,
      course: course._id,
      user: req.user._id,
      amount: course.discountFee,
      status: "pending",
      payerInfo: {
        name: `${req.body.firstName} ${req.body.lastName}`,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        province: req.body.province,
        postalCode: req.body.postalCode,
      },
      payments: [
        {
          paymentPlan: req.body.paymentPlan,
          amount:
            req.body.paymentPlan === "part-payment"
              ? parseInt((course.discountFee / 2).toFixed(2))
              : parseInt(course.discountFee),
        },
      ],
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
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

router.post(isLogin, isStudent, createOrder);

export default handler();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
