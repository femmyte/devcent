import mongoose, { model, Schema, models } from "mongoose";

const CourseSchema = new Schema(
  {
    courseId: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    urlName: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    discountFee: {
      type: Number,
      required: true,
    },
    enrolledUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Course = models.Course || model("Course", CourseSchema);

export default Course;
