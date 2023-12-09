const CheckAdmin = require("../../api/Admin/CheckAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// check user admin

router.get("/users/admin/:email", verifyToken, CheckAdmin);

module.exports = router;
