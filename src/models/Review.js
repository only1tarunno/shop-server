const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  product_id: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  reviewProductImage: {
    type: String,
    required: true,
  },
  reviewtitle: {
    type: String,
    required: true,
  },
});

const Review = model("Review", ReviewSchema);

module.exports = Review;
