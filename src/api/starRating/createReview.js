const Review = require("../../models/Review");

const createReview = async (req, res) => {
  const review = req.body;
  try {
    const result = await Review.create(review);
    res.send(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = createReview;
