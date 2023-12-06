const Cart = require("../../models/Cart");

const createCartController = async (req, res) => {
  try {
    const cartItem = req.body;
    const result = await Cart.create(cartItem);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = createCartController;
