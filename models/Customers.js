import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema(
  {
    _id: {
      type: String, 
      required: true, 
    },
    id: {
      type: String, 
      required: true, 
    },
    name: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image_url: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true,
  }
);

const Customer =
  models.Customer || model("Customer", CustomerSchema, "customers");

export default Customer;
