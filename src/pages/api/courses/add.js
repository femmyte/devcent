import dbConnect from "lib/db";
import { isAllowedMethod } from "lib/helpers/isAllowed";
import { generateId } from "lib/utils/random";
import { createUrlName } from "lib/utils/urlName";
import { validateCourse } from "lib/validations/courseValidation";
import Course from "models/Course";

const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

// @description: Admin add course data
// @Endpoint: api/courses/add
// @AccessType: private/admin
export default async function add(req, res) {
  try {
    const db = await dbConnect();

    console.log(req.params);

    if (!isAllowedMethod(req, res, "POST")) {
      return;
    }

    const error = await validateCourse(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const { name, description, fee, discountFee } = req.body;

    const courseId = generateId(8);
    const urlName = createUrlName(name, courseId);

    const course = await Course.create({
      courseId,
      name,
      urlName,
      description,
      fee,
      discountFee,
    });

    res.status(201).json({
      success: true,
      message: "Course added successfully",
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
