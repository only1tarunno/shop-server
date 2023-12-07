const Payment = require("../../models/Paymet");

const paymentHistoty = async (req, res) => {
  try {
    const useremail = req.params.email;
    const query = { email: useremail };
    if (useremail !== req.user.email) {
      return res.status(403).send({ message: "forbidden" });
    }
    const result = await Payment.find(query);
    res.send(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = paymentHistoty;
