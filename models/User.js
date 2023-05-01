import mongoose, { model, Schema, models } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true,
      unique: true,
    },
    phone: { type: String, trim: true },
    password: {
      type: String,
      maxlength: 255,
    },
    isGoogleSignup: {
      type: Boolean,
      default: false,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    activationToken: {
      type: String,
      trim: true,
    },
    activationTokenExpiresIn: {
      type: Number,
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

// Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwt = function () {
  return jwt.sign(
    { _id: this._id, name: this.name, email: this.email },
    process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY,
    {
      expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRES,
    }
  );
};

// comapre password
userSchema.methods.comparePassword = async function (enteredPassword) {
  const password = this.password ? this.password : "";
  return await bcrypt.compare(enteredPassword, password);
};

const User = models.User || model("User", userSchema);

export default User;
