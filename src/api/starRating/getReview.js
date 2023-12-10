const Review = require("../../models/Review");

const getReview = async (req, res) => {
  try {
    const result = await Review.find();
    res.send(result);
  } catch (error) {
    res.json({ error: "Internal server error" });
  }
};

module.exports = getReview;
