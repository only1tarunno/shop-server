const Cart = require("../../models/Cart");

const getCartProducts = async (req, res) => {
  const email = req.query.email;

  try {
    const result = await Cart.find({ email });
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = getCartProducts;
