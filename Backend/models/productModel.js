import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },

  image: { type: String, required: true },

  stacks: { type: Array, required: true },
  url: { type: String, required: true },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
