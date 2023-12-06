const Cart = require("../../models/Cart");

const getSinglecart = async (req, res) => {
  const menuId = req.params.id;
  const email = req.user.email;

  try {
    const product = await Cart.findOne({ menuId, email });
    if (!product) {
      return res.send({ message: "Product not found" });
    }
    res.send(product);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = getSinglecart;
