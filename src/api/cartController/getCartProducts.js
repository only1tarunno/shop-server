const Cart = require("../../models/Cart");

const getCartProducts = async (req, res) => {
  const email = req.query.email;

  try {
    const totalQuantity = await Cart.aggregate([
      { $match: { email } }, // Match documents for the given email
      {
        $group: {
          _id: null,
          totalQuantity: { $sum: "$quantity" }, // Calculate the sum of quantities
        },
      },
    ]);

    const cartProducts = await Cart.find({ email }); // Fetch cart products

    // Send both cart products and total quantity in the response
    res.send({
      cartProducts,
      totalQuantity:
        totalQuantity.length > 0 ? totalQuantity[0].totalQuantity : 0,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = getCartProducts;
