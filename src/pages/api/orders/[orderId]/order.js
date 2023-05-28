import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import Order from "models/Order";
import { router, handler } from "lib/helpers/router";
import { isLogin, isStudent } from "lib/middleware/auth";

const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

// @description: Get order
// @Endpoint: api/orders/:orderId/order
// @AccessType: private/student
async function getOrder(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "GET")) {
      return;
    }

    const order = await Order.findOne({ orderId: req.query.orderId }).populate({
      path: "course",
      select: "-enrolledUsers -description",
    });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

router.get(isLogin, isStudent, getOrder);

export default handler();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
