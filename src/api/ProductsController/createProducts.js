const Product = require("../../models/Product");

const createProducts = async (req, res) => {
  const product = req.body;
  try {
    const result = await Product.create(product);
    res.send(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = createProducts;
