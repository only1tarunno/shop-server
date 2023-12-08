const CategoryController = require("../../api/Categories/CategoryController");

const router = require("express").Router();

router.get("/categories", CategoryController);

module.exports = router;
