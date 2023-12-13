const CheckAdmin = require("../../api/Admin/CheckAdmin");
const orderStats = require("../../api/Admin/orderStats");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// check user admin

router.get("/users/admin/:email", verifyToken, CheckAdmin);

// statistics
router.get("/order-stats", orderStats);

module.exports = router;
