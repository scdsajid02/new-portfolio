import express from "express"
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import {addProduct, listProducts, removeProduct} from "../controllers/product.js";

const productRouter = express.Router();

productRouter.post("/add", adminAuth, upload.single("image"), addProduct);
productRouter.get("/list", listProducts);
productRouter.post("/remove", adminAuth, removeProduct);
export default productRouter
