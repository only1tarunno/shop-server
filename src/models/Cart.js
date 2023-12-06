const { model, Schema } = require("mongoose");

const CartSchema = new Schema({
  menuId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
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
  totalPrice: {
    type: Number,
    required: true,
  },
  quantity: {
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

const Cart = model("Cart", CartSchema);

module.exports = Cart;
