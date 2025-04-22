import userModel from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});
const addPhoto = async (req, res) => {
  try {
    const { userId, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const updatedUserPhoto = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: { photoUrl: photoUrl, updatedAt: new Date() },
      },
      { new: true, runValidators: true }
    );

    res.json({ success: true, data: updatedUserPhoto });
  } catch (error) {
    console.error("Add photo Error", error);
    res.status(500).json({
      success: false,
      message: "Failed to update Photo",
      error: error.message,
    });
  }
};

export { addPhoto };
