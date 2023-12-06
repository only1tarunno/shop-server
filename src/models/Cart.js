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
  categories: {
    type: String,
    required: true,
  },
});

const Cart = model("Cart", CartSchema);

module.exports = Cart;
