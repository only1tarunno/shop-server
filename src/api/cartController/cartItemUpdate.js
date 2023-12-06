const Cart = require("../../models/Cart");

const cartItemUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const cartItem = req.body;
    const filter = { _id: id };
    const updateDoc = {
      $set: {
        ...cartItem,
      },
    };
    const result = await Cart.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = cartItemUpdate;
