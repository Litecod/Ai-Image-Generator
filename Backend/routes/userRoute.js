import express from "express";
import { google, addSubscription, getUser, verifyStripe, PlaceOrderStripe } from "../controllers/userController.js"; 
import authUser from "../middleware/auth.js";
import { addPhoto } from "../controllers/photoController.js";

const UserRouter = express.Router();


//Stripe paynment 
UserRouter.post("/verifyStripe", authUser, verifyStripe);
UserRouter.post("/placeOrderStripe", authUser, PlaceOrderStripe)

//add photo to db
UserRouter.post("/addphoto", authUser, addPhoto)

//Login
UserRouter.post('/google', google);

//add subscription plan
UserRouter.post('/subscription', authUser, addSubscription);

//geting User details
UserRouter.post('/getusers', authUser, getUser);

export default UserRouter;