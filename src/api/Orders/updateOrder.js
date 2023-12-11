const Payment = require("../../models/Paymet");

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const statusInfo = req.body;
  try {
    const filter = { _id: id };
    const updateDoc = {
      $set: {
        ...statusInfo,
      },
    };

    const result = await Payment.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = updateOrder;
