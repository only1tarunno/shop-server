const Product = require("../../models/Product");

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const query = { _id: id };
    const result = await Product.deleteOne(query);
    res.send(result);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = deleteProduct;
