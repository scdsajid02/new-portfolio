import express from "express"
import amdinLogin from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/admin", amdinLogin);

export default userRouter
