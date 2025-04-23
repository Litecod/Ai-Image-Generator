import userModel from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

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


const downloadImage =  async (req, res) => {
  try {
    const { url } = req.query;
    
    if (!url) {
      return res.status(400).json({ error: 'Missing image URL' });
    }
    
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Upstream error: ${response.status} ${response.statusText}`);
    }

    // Convert to buffer
    const buffer = await response.arrayBuffer();
    
    // Set proper headers
    res.set({
      'Content-Type': response.headers.get('content-type'),
      'Content-Disposition': 'attachment; filename="dalle-image.png"',
      'Cache-Control': 'no-store'
    });

    // Send the buffer
    res.send(Buffer.from(buffer));

  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to download image',
      details: error.message
    });
  }
};



export { addPhoto, downloadImage};
