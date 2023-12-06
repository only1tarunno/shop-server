const Cart = require("../../models/Cart");

const createCartController = async (req, res) => {
  try {
    const cartItem = req.body;
    console.log(cartItem.menuId);
    const existingCartItem = await Cart.findOne({ menuId: cartItem.menuId });
    if (existingCartItem) {
      // If the cart item with the same menuId exists, update the quantity
      existingCartItem.quantity += cartItem.quantity;
      existingCartItem.totalPrice = (
        existingCartItem.totalPrice + cartItem.totalPrice
      ).toFixed(2);
      const result = await existingCartItem.save();
      res.send(result);
    } else {
      // If the cart item doesn't exist, create a new one
      const result = await Cart.create(cartItem);
      res.send(result);
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = createCartController;
