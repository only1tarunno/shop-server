const Payment = require("../../models/Paymet");
const Review = require("../../models/Review");

const userActivities = async (req, res) => {
  const email = req.params.email;
  try {
    const payment = await Payment.countDocuments({ email });
    const reviews = await Review.countDocuments({ email });
    // Fetching documents that match the email
    const purchasedProducts = await Payment.find({ email }, "productQuantity");

    // Calculating the sum of productQuantity
    const productQuantity = purchasedProducts.reduce(
      (total, product) => total + (product.productQuantity || 0),
      0
    );

    res.send({ payment, reviews, productQuantity });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = userActivities;
