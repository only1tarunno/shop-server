const Cart = require("../../models/Cart");
const Payment = require("../../models/Paymet");
const Product = require("../../models/Product");

const savePayment = async (req, res) => {
  const payment = req.body;
  const { cartIds } = payment;

  try {
    const result = await Payment.create(payment);
    // Fetch cart data to get quantities
    const carts = await Cart.find({ _id: { $in: cartIds } });

    // Update product availability_count based on cart quantities
    for (const cart of carts) {
      const product = await Product.findById(cart.menuId);
      if (product) {
        product.availability_count -= cart.quantity;
        await product.save();
      } else {
        return res.json({
          message: `Product with ID ${cart.menuId} not found`,
        });
      }
    }

    // carefully delete each item on the cart
    const query = {
      _id: {
        $in: payment.cartIds.map((id) => id),
      },
    };

    const deleteResult = await Cart.deleteMany(query);

    res.send({ result, deleteResult, message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = savePayment;
