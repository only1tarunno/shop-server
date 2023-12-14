const CategoryController = require("../../api/Categories/CategoryController");
const createcategory = require("../../api/Categories/createcategory");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

router.get("/categories", CategoryController);
// add category
router.post("/categories", verifyToken, verifyAdmin, createcategory);

module.exports = router;
