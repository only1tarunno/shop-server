const Cart = require("../../models/Cart");

const deleteSingleCartItem = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Cart.deleteOne({ _id: id });
    res.send(result);
  } catch (error) {
    res.send({ message: "Failed to delete cart item", error: error.message });
  }
};

module.exports = deleteSingleCartItem;
