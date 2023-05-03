import { model, Schema, models } from "mongoose";

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  enrolledUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;
