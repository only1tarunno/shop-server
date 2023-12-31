const adminAllProducts = require("../../api/ProductsController/adminAllProducts");
const createProducts = require("../../api/ProductsController/createProducts");
const deleteProduct = require("../../api/ProductsController/deleteProduct");
const getAllProducts = require("../../api/ProductsController/getAllProducts");
const getSingleProduct = require("../../api/ProductsController/getSingleProduct");
const updateProduct = require("../../api/ProductsController/updateProduct");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// get all products
router.get("/products", getAllProducts);
// get single product
router.get("/products/:id", getSingleProduct);

// get all product for admin dashboard
router.get("/admin/allProducts", adminAllProducts);

// admin will create a product
router.post("/admin/allProducts", verifyToken, verifyAdmin, createProducts);

// admin can update product
router.patch("/admin/allProducts/:id", verifyToken, verifyAdmin, updateProduct);

// admin delete product
router.delete(
  "/admin/allProducts/:id",
  verifyToken,
  verifyAdmin,
  deleteProduct
);

module.exports = router;
