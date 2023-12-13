const Payment = require("../../models/Paymet");
const Product = require("../../models/Product");

const orderStats = async (req, res) => {
  try {
    const result = await Payment.aggregate([
      {
        $unwind: "$productItemIds",
      },
      {
        $lookup: {
          from: "products",
          let: { productId: { $toObjectId: "$productItemIds" } },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$productId", "$_id"], // Compare converted menuItemIds with _id in menuCollection
                },
              },
            },
          ],

          as: "orderedProducts",
        },
      },
      {
        $unwind: "$orderedProducts",
      },
      {
        $group: {
          _id: "$orderedProducts.categories",
          quantity: {
            $sum: "$productQuantity",
          },
          totalRevenue: {
            $sum: {
              $multiply: ["$productQuantity", "$orderedProducts.price"],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          totalRevenue: "$totalRevenue",
        },
      },
    ]);

    // Transforming data to the required format
    const formattedResult = [["Category", "Total Revenue"]];
    result.forEach((item) => {
      formattedResult.push([item.category, item.totalRevenue]);
    });

    res.send(formattedResult);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = orderStats;
