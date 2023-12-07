const getPurchasedItem = require("../../api/starRating/getPurchasedItem");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get payment history
router.get("/purchsedItem", verifyToken, getPurchasedItem);

module.exports = router;
