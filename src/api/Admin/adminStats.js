const Payment = require("../../models/Paymet");
const Product = require("../../models/Product");
const User = require("../../models/User");

const adminStats = async (req, res) => {
  try {
    const users = await User.estimatedDocumentCount();
    const products = await Product.estimatedDocumentCount();
    const orders = await Payment.estimatedDocumentCount();
    const result = await Payment.aggregate([
      {
        $group: {
          _id: null,
          totalrevenue: {
            $sum: "$price",
          },
        },
      },
    ]);

    const revenue = result.length > 0 ? result[0].totalrevenue : 0;
    res.send({ users, products, orders, revenue });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = adminStats;
