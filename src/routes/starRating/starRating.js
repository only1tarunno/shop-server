const createReview = require("../../api/starRating/createReview");
const getPurchasedItem = require("../../api/starRating/getPurchasedItem");
const getsingleReview = require("../../api/starRating/getsingleReview");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get payment history
router.get("/purchsedItem", verifyToken, getPurchasedItem);

// get single product review
router.get("/review/:id", verifyToken, getsingleReview);

// create a review
router.post("/review", verifyToken, createReview);

module.exports = router;
