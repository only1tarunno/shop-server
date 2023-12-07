const Payment = require("../../models/Paymet");
const Product = require("../../models/Product");

const getPurchasedItem = async (req, res) => {
  const email = req.user.email;
  try {
    const payments = await Payment.find({ email: email });
    const uniqueProductIds = new Set(); // Use a set to store unique product IDs
    const products = [];

    if (payments.length) {
      for (let index = 0; index < payments.length; index++) {
        const payment = payments[index];
        for (let i = 0; i < payment.productItemIds.length; i++) {
          const productId = payment.productItemIds[i];
          // Check if the product ID is not already added
          if (!uniqueProductIds.has(productId)) {
            uniqueProductIds.add(productId); // Add the ID to the set
            const singleProduct = await Product.findOne({ _id: productId });
            if (singleProduct) {
              products.push(singleProduct); // Add the product to the products array
            }
          }
        }
      }
    }

    if (products.length > 0) {
      return res.json({
        message: "Products found",
        success: true,
        products: products,
      });
    } else {
      return res.json({
        message: "No products found",
        success: false,
        products: products,
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = getPurchasedItem;
