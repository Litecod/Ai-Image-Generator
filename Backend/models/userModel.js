import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    payment: { type: String, default: "true" },
    subscription: { type: Object, default: {} },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
