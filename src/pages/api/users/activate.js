import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { sendWelcomeMessage } from "lib/nodemailer/welcome-message";
import User from "models/User";

export default async function signup(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "POST")) {
      return;
    }

    const activationToken = req.body?.activationToken;
    const user = await User.findOne({
      activationToken: activationToken,
      activationTokenExpiresIn: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid activation token",
      });
    }

    user.isActivated = true;
    user.activationToken = undefined;
    user.activationTokenExpiresIn = undefined;

    await user.save();

    await sendWelcomeMessage({ email: user.email });
    res.status(201).json({
      success: true,
      message: "Account activated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
