import { Schema, model, models } from "mongoose";

const InvoiceSchema = new Schema(
  {
    customer_id: {
      type: String,
      required: true, // Assuming it's a UUID, which is a string
    },
    amount: {
      type: Number,
      required: true, // The amount should be a number
    },
    status: {
      type: String,
      enum: ["pending", "paid"], // You can extend this with more statuses if needed
      required: true,
    },
    date: {
      type: Date, // Store as Date object for easier date manipulation
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Invoice = models.Invoice || model("Invoice", InvoiceSchema, "invoices");

export default Invoice;
