const Cart = require("../../models/Cart");

const createCartController = async (req, res) => {
  try {
    const cartItem = req.body;
    const email = req.user.email;

    const existingCartItem = await Cart.findOne({
      menuId: cartItem.menuId,
      email,
    });
    if (existingCartItem) {
      // If the cart item with the same menuId exists, update the quantity
      existingCartItem.quantity += cartItem.quantity;
      existingCartItem.totalPrice = (
        existingCartItem.totalPrice + cartItem.totalPrice
      ).toFixed(2);
      const result = await existingCartItem.save();
      res.send(result);
    } else {
      // If no cart item exists for the same menuId and user email, create a new one
      cartItem.email = email; // Assign the user's email to the cart item
      const result = await Cart.create(cartItem);
      res.send(result);
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = createCartController;
