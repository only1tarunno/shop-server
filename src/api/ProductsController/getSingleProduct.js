const Product = require("../../models/Product");
const Review = require("../../models/Review");

const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    const reviews = await Review.find({ product_id: id });
    res.send({ product, reviews });
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = getSingleProduct;
