const createReview = require("../../api/starRating/createReview");
const deleteReview = require("../../api/starRating/deletereview");
const getPurchasedItem = require("../../api/starRating/getPurchasedItem");
const getReview = require("../../api/starRating/getReview");
const getsingleReview = require("../../api/starRating/getsingleReview");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get payment history
router.get("/purchsedItem", verifyToken, getPurchasedItem);

// get single product review
router.get("/review/:id", verifyToken, getsingleReview);

// create a review
router.post("/review", verifyToken, createReview);

// get all products review
router.get("/allReviews", verifyToken, verifyAdmin, getReview);

// admin delete product
router.delete("/allReviews/:id", verifyToken, verifyAdmin, deleteReview);

module.exports = router;
