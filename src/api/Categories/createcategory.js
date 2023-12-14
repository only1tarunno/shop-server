const Category = require("../../models/Categories");

const createcategory = async (req, res) => {
  try {
    const category = req.body;
    const result = await Category.create(category);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = createcategory;
