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
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "successful"],
      default: "pending",
    },
    payments: [
      {
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
        flw_ref: {
          type: String,
          trim: true,
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
    ],
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
      address: {
        type: String,
        trim: true,
      },
      province: {
        type: String,
        trim: true,
      },
      city: {
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
    },
  },
  { timestamps: true }
);

const Order = models.Order || model("Order", orderSchema);

export default Order;
