const Review = require("../../models/Review");

const deleteReview = async (req, res) => {
  const id = req.params.id;

  try {
    const query = { _id: id };
    const result = await Review.deleteOne(query);
    res.send(result);
  } catch (err) {
    res.send({ message: err.message });
  }
};

module.exports = deleteReview;
