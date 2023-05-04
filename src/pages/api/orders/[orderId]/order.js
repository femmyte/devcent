import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import User from "models/User";
import Order from "models/Order";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { isLoggedIn } from "lib/helpers/auth";

const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

// @description: Get order
// @Endpoint: api/orders/:orderId/order
// @AccessType: private
export default async function getOrder(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "GET")) {
      return;
    }

    const session = await getServerSession(req, res, authOptions);
    let user = await isLoggedIn(res, session, User);
    if (!user) {
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
