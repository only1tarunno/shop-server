const getAllProducts = require("../../api/ProductsController/getAllProducts");

const router = require("express").Router();

router.get("/products", getAllProducts);

module.exports = router;
