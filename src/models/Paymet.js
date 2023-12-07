const { Schema, model } = require("mongoose");

const PaymentSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  cartIds: {
    type: [String],
    required: true,
  },
  productItemIds: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
});

const Payment = model("Payment", PaymentSchema);
module.exports = Payment;
