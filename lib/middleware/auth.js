import { getServerSession } from "next-auth/next";
import User from "models/User";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function isLogin(req, res, next) {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (!session) {
    return res.status(401).json({
      success: false,
      message: "Please login to continue",
    });
  }
  const user = await User.findById(session?.user._id);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid user account",
    });
  }

  req.user = user;
  next();
}

export async function isStudent(req, res, next) {
  if (req.user.role !== "student") {
    return res.status(401).json({
      success: false,
      message: "Unauthorized! You are not a student.",
    });
  }

  next();
}

export async function isInstructor(req, res, next) {
  if (req.user.role !== "instructor" || !req.user.isAuthorizedInstructor) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized! You are not an instructor.",
    });
  }

  next();
}

export async function isAdmin(req, res, next) {
  if (req.user.role !== "admin" || !req.user.isAuthorizedAdmin) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized! You are not an admin.",
    });
  }

  next();
}
