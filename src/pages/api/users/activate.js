import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { validateSignup } from "lib/validations/userValidations";
import User from "models/User";

export default async function signup(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "POST")) {
      return;
    }

    const activationToken = req.body?.activationToken;

    const newUser = jwt.verify(activationToken, process.env.ACTIVATION_SECRET);

    if (!newUser) {
      return next(new ErrorHandler("Invalid token", 400));
    }
    const { name, email, password } = newUser;

    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = new User({
      name: "New User",
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
