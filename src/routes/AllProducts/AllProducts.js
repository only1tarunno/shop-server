const getAllProducts = require("../../api/ProductsController/getAllProducts");
const getSingleProduct = require("../../api/ProductsController/getSingleProduct");

const router = require("express").Router();

// get all products
router.get("/products", getAllProducts);
// get single product
router.get("/products/:id", getSingleProduct);

module.exports = router;
