import dbConnect from "lib/db";
import { generateToken } from "lib/helpers/token";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { sendAccountActivationMessage } from "lib/nodemailer/account-activation-message";
import { validateSignup } from "lib/validations/userValidations";
import User from "models/User";

const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

export default async function signup(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "POST")) {
      return;
    }

    const error = await validateSignup(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const activationToken = generateToken(20);
    const user = new User({
      name: "User",
      email: req.body.email,
      password: req.body.password,
      activationToken: activationToken,
      activationTokenExpiresIn: Date.now() + 30 * 60 * 1000, // 30 minutes
    });
    await user.save();

    const activationUrl = `${clientUrl}/user/activate/${activationToken}`;
    await sendAccountActivationMessage({
      url: activationUrl,
      email: req.body.email,
      expires: 30,
    });

    res.status(200).json({
      success: true,
      message: "Check your email to activate your account",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
