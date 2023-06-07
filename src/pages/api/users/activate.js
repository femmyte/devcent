import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { sendWelcomeMessage } from "lib/nodemailer/welcome-message";
import User from "models/User";

// @description: User activate account
// @Endpoint: api/users/activate
// @AccessType: public
export default async function activate(req, res) {
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
        message: "Invalid link or link expired.",
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

/*
The function first checks if the request method is POST and then checks if the activation token 
provided in the request body is valid by querying the database for a user with that token and 
checking if it hasn’t expired yet.

If there are any errors in the activation process, it returns a JSON response with an error message.
If there are no errors, it updates the user’s account status to activated and sends a welcome 
message to their email address.

Finally, it returns a JSON response with a success status and message.
*/
