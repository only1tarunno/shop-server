const payController = require("../../api/Paycontroller/payController");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get cart item by email
router.get("/cart/pay/quantitycheck", verifyToken, payController);

module.exports = router;
