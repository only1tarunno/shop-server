const Review = require("../../models/Review");

const getsingleReview = async (req, res) => {
  const { email } = req.user;
  const productId = req.params.id;
  try {
    const foundReview = await Review.findOne({ product_id: productId, email });

    if (foundReview) {
      return res.send({ success: true, foundReview }); // Send found review
    } else {
      return res.send({
        success: false,
        message: "No review found for this product and user",
      }); // Send a message if no review is found
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = getsingleReview;
