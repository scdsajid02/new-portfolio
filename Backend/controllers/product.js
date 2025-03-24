import productModel from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      about,
      stacks,
      url,
    } = req.body;
    
    const image = req.file;
    if (!image) {
      return res.json({ success: false, message: "Image is required" });
    }

    

    let result = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const productData = {
      name,
      about,
      stacks: JSON.parse(stacks),
      url,
      image: result.secure_url, // Store single image URL

      
    };

    console.log(productData);
    const product = new productModel(productData);

    await product.save();
    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});

    // Remove extra quotes if they exist
    const cleanedProducts = products.map((product) => ({
      ...product._doc,
      name: product.name.replace(/^"|"$/g, ""),
      about: product.about.replace(/^"|"$/g, ""),
    }));

    res.json({ success: true, products: cleanedProducts });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
export {listProducts, addProduct, removeProduct}