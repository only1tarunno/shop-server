const Category = require("../../models/Categories");

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.deleteOne({ _id: id });
    res.send(result);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = deleteCategory;
