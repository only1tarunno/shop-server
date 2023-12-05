const Product = require("../../models/Product");

const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.findById(id);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = getSingleProduct;
