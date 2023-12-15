const CategoryController = require("../../api/Categories/CategoryController");
const createcategory = require("../../api/Categories/createcategory");
const deleteCategory = require("../../api/Categories/deleteCategory");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

router.get("/categories", CategoryController);
// add category
router.post("/categories", verifyToken, verifyAdmin, createcategory);
// delete category

router.delete("/categories/:id", verifyToken, verifyAdmin, deleteCategory);

module.exports = router;
