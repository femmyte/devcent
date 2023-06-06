import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import Course from "models/Course";

const clientUrl = process.env.CLIENT_URL;

// @description: Get all course
// @Endpoint: api/courses/all-course
// @AccessType: public
export default async function getAllCourse(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "GET")) {
      return;
    }

    const courses = await Course.find({});

    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
