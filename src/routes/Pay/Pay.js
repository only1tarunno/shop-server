const payController = require("../../api/Paycontroller/payController");
const paymentIntent = require("../../api/Paycontroller/paymentIntent");
const paymentHistoty = require("../../api/Paycontroller/paymenthistory");
const savePayment = require("../../api/Paycontroller/savePayment");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get payment history
router.get("/payments/:email", verifyToken, paymentHistoty);

// check quantity before pay
router.get("/cart/pay/quantitycheck", verifyToken, payController);

// create-payment-intent
router.post("/create-payment-intent", paymentIntent);

// save payment
router.post("/payments", savePayment);

module.exports = router;