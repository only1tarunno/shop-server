const Product = require("../../models/Product");

const getAllProducts = async (req, res) => {
  const { search, tags, category, sort } = req.query;
  try {
    let query = {};

    // Applying filters if they exist
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } }, // Case-insensitive title search
          { description: { $regex: search, $options: "i" } }, // Case-insensitive description search
        ],
      };
    }

    if (tags) {
      query.tags = { $all: tags.split(",") }; // Finding products that have all specified tags
    }

    if (category) {
      query.categories = category;
    }

    const options = {};
    if (sort === "desc") {
      options.sort = { price: -1 }; // Sort by price high to low
    } else if (sort === "asc") {
      options.sort = { price: 1 }; // Sort by price low to high
    }

    const result = await Product.find(query).sort(options.sort);
    res.send(result);
  } catch (err) {
    res.json({ message: err.message, response: "Something went wrong" });
  }
};

module.exports = getAllProducts;
