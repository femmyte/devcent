import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import Course from "models/Course";

const clientUrl = process.env.CLIENT_URL;

// @description: Get course by url name
// @Endpoint: api/courses/:urlName/course
// @AccessType: public
export default async function getCourse(req, res) {
  try {
    const db = await dbConnect();

    if (!isAllowedMethod(req, res, "GET")) {
      return;
    }

    const query = {
      $regex: req.query.urlName,
      $options: "i",
    };

    const course = await Course.findOne({ urlName: query });

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
