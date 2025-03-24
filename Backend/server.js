import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRoute.js";
import router from "./routes/contactRoute.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/contact", router); 

app.get("/", (req, res) => {
  res.send("API  WORKING");
});

app.listen(port, () => console.log("server started on port :" + port));