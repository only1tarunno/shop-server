const getAllOrders = require("../../api/Orders/getAllOrders");
const updateOrder = require("../../api/Orders/updateOrder");
const payController = require("../../api/Paycontroller/payController");
const paymentIntent = require("../../api/Paycontroller/paymentIntent");
const paymentHistoty = require("../../api/Paycontroller/paymenthistory");
const savePayment = require("../../api/Paycontroller/savePayment");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get all payments
router.get("/orders", verifyToken, verifyAdmin, getAllOrders);

// update status of a product
router.patch("/orders/:id", verifyToken, verifyAdmin, updateOrder);

// get payment history
router.get("/payments/:email", verifyToken, paymentHistoty);

// check quantity before pay
router.get("/cart/pay/quantitycheck", verifyToken, payController);

// create-payment-intent
router.post("/create-payment-intent", paymentIntent);

// save payment
router.post("/payments", savePayment);

module.exports = router;
