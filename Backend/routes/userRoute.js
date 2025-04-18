import express from "express";
import { google, addSubscription, getUser } from "../controllers/userController.js"; 
import authUser from "../middleware/auth.js";

const UserRouter = express.Router();


UserRouter.post('/google', google);
UserRouter.post('/subscription', authUser, addSubscription);
UserRouter.post('/getusers', authUser, getUser);

export default UserRouter;