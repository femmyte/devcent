import mongoose, { model, Schema, models } from "mongoose";

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
    phone: { type: String, trim: true, unique: true },
    password: {
      type: String,
      maxlength: 255,
    },
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
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY, {
    expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRES,
  });
};

// comapre password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = models.User || model("User", userSchema);

export default User;
