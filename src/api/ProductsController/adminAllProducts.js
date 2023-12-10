const Product = require("../../models/Product");

const adminAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 6;

    const result = await Product.find();
    //   .skip(page * size)
    //   .limit(size);

    res.send(result);
  } catch (error) {
    res.json({ error: "Internal server error" });
  }
};

module.exports = adminAllProducts;
