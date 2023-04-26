import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import User from "models/User";

export default async function signup(req, res) {
  try {
    if (!isAllowedMethod(req, res, "POST")) {
      return;
    }

    const db = await dbConnect();

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
