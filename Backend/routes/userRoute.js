import express from "express";
import { google, addSubscription, getUser, verifyStripe, PlaceOrderStripe } from "../controllers/userController.js"; 
import authUser from "../middleware/auth.js";

const UserRouter = express.Router();


//Stripe paynment 
UserRouter.post("/verifyStripe", authUser, verifyStripe);
UserRouter.post("/placeOrderStripe", authUser, PlaceOrderStripe)


UserRouter.post('/google', google);
UserRouter.post('/subscription', authUser, addSubscription);
UserRouter.post('/getusers', authUser, getUser);

export default UserRouter;