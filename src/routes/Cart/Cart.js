const cartItemUpdate = require("../../api/cartController/cartItemUpdate");
const createCartController = require("../../api/cartController/createCartController");
const getCartProducts = require("../../api/cartController/getCartProducts");
const getSinglecart = require("../../api/cartController/getSinglecart");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get cart item by email
router.get("/carts", getCartProducts);
// get single cart product
router.get("/singlecart/:id", verifyToken, getSinglecart);
// add a product in the cart
router.post("/carts", verifyToken, createCartController);
// update a product in the cartitem
router.patch("/carts/:id", verifyToken, cartItemUpdate);

module.exports = router;
