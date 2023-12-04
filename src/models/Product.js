const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  thumbnail_url: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  availability_count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
