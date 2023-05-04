import mongoose, { model, Schema, models } from "mongoose";

const orderSchema = new Schema(
  {
    orderId: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    payment: {
      paymentPlan: {
        type: String,
        enum: ["outright-payment", "part-payment"],
      },
      amount: {
        type: Number,
      },
      status: {
        type: String,
      },
      transaction_id: {
        type: String,
        trim: true,
      },
      created_at: {
        type: String,
        trim: true,
      },
    },
    payerInfo: {
      name: {
        type: String,
        trim: true,
        maxlength: 50,
      },
      email: {
        type: String,
        maxlength: 50,
        trim: true,
      },
      country: {
        type: String,
        trim: true,
      },
      street: {
        type: String,
        trim: true,
      },
      houseNumber: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      postalCode: {
        type: String,
        trim: true,
      },
      phoneNumber: {
        type: String,
        trim: true,
      },
      info: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

const Order = models.Order || model("Order", orderSchema);
