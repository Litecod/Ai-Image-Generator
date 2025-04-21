import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const currency = "usd";

const google = async (req, res) => {
  const { username, email, subscription } = req.body;

  try {
    // Input validation
    if (!email || !username) {
      return res.status(400).json({
        success: false,
        message: "Email and username are required",
      });
    }

    // Check for existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      return res.status(200).json({
        success: true,
        token,
        user: {
          id: existingUser._id,
          username: existingUser.username,
          email: existingUser.email,
          subscription: existingUser.subscription,
        },
      });
    }

    // Create new user
    const generatedPassword =
      Math.random().toString(36).slice(-8) +
      Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(generatedPassword, 10);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      subscription: subscription || {
        plan: "none",
        price: 0,
        period: "",
        credits: "",
        image: 3,
        startDate: new Date(),
        status: "inactive",
        isTrial: true,
      },
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        subscription: newUser.subscription,
      },
    });
  } catch (error) {
    console.error("Google auth error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const addSubscription = async (req, res) => {
  try {
    const { userId, plan, price, period, credits, image, startDate, endDate, status, isTrial } = req.body;

    // Input validation
    if (!userId || !plan || !price || !period || !credits || !image) {
      return res.status(400).json({
        success: false,
        message: "All subscription fields are required",
      });
    }

    const subscriptionData = {
      plan,
      price,
      period,
      credits,
      image,
      startDate,
      endDate,
      status,
      isTrial,
    };

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: {
          subscription: subscriptionData,
          updatedAt: new Date(),
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({ success: true, data: updatedUser });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update subscription",
      error: error.message,
    });
  }
};

// Helper function to calculate subscription end date
function calculateEndDate(period) {
  const date = new Date();
  switch (period) {
    case "monthly":
      date.setMonth(date.getMonth() + 1);
      break;
    case "yearly":
      date.setFullYear(date.getFullYear() + 1);
      break;
    case "weekly":
      date.setDate(date.getDate() + 7);
      break;
    default:
      date.setMonth(date.getMonth() + 1);
  }
  return date;
}

const getUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const userInfo = await userModel.findById(userId);
    res.json({ success: true, userInfo });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Create Stripe Checkout Session
const PlaceOrderStripe = async (req, res) => {
  try {
    const { userId, plan, price, period, credits, image } = req.body;
    const { origin } = req.headers;

    const subscriptionData = {
      plan,
      price,
      period,
      credits,
      image,
      startDate: new Date(),
      endDate: calculateEndDate(period),
      status: "active",
      isTrial: false,
    };

    const line_items = [
      {
        price_data: {
          currency: currency,
          product_data: {
            name: period + " " + " " + plan,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ];

    // line_items.push({
    //   price_data: {
    //     currency: currency,
    //     product_data: {
    //       name: item.plan,
    //     },
    //     unit_amount: item.price * 100,
    //   },
    //   quantity: 1,
    // });

    const session = await stripe.checkout.sessions.create({
      success_url: "https://ai-image-generator-dasboard.vercel.app/payment-success",
      cancel_url: "https://ai-image-generator-dasboard.vercel.app/payment-cancel",
      line_items,
      mode: "payment",
    });

    if (session) {
      const updatedUser = await userModel.findByIdAndUpdate(
        userId,
        {
          $set: {
            subscription: subscriptionData,
            updatedAt: new Date(),
          },
        },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
    }

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyStripe = async (req, res) => {};

export { google, addSubscription, getUser, PlaceOrderStripe, verifyStripe };
