import dbConnect from "lib/db";
import { generateToken } from "lib/helpers/token";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { sendAccountActivationMessage } from "lib/nodemailer/account-activation-message";
import { validateSignup } from "lib/validations/userValidations";
import User from "models/User";

const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

// @description: User signup
// @Endpoint: api/users/signup
// @AccessType: public
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

/*
The function first checks if the request method is POST and then validates the signup 
data using a separate function called validateSignup. If there are any errors in the 
signup data, it returns a JSON response with an error message.

If there are no errors, it checks if the user already exists in the database and 
creates a new user if they don’t exist. It then generates an activation token and sends 
an account activation message to the user’s email address.

Finally, it returns a JSON response with a success status and message.
*/
