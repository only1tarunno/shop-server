const createCartController = require("../../api/cartController/createCartController");
const getCartProducts = require("../../api/cartController/getCartProducts");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get cart item by email
router.get("/carts", getCartProducts);
// create a user
router.post("/carts", verifyToken, createCartController);

module.exports = router;
