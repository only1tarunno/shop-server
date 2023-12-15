const Cart = require("../../models/Cart");

const getCartProducts = async (req, res) => {
  const email = req.query.email;

  try {
    const cartProducts = await Cart.find({ email }); // Fetch cart products

    // Send both cart products and total quantity in the response
    res.send(cartProducts);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = getCartProducts;
