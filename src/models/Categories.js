const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  catImage: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    required: true,
  },
});

const Category = model("Categorie", CategorySchema);

module.exports = Category;
