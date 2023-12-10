const Product = require("../../models/Product");

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const productInfo = req.body;

  try {
    const filter = { _id: id };
    const updateDoc = {
      $set: {
        ...productInfo,
      },
    };

    const result = await Product.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = updateProduct;
