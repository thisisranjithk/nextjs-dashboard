import { Schema, model, models } from "mongoose";

const RevenueSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    revenue: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Revenue = models.Revenue || model("Revenue", RevenueSchema, "revenue");

export default Revenue;
