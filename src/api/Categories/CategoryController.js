const Category = require("../../models/Categories");

const CategoryController = async (req, res) => {
  try {
    const publishers = await Category.find();
    res.json(publishers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = CategoryController;
