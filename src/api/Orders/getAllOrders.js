const Payment = require("../../models/Paymet");

const getAllOrders = async (req, res) => {
  try {
    const result = await Payment.find();
    res.send(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = getAllOrders;
