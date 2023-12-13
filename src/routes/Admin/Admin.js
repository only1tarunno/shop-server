const CheckAdmin = require("../../api/Admin/CheckAdmin");
const adminStats = require("../../api/Admin/adminStats");
const orderStats = require("../../api/Admin/orderStats");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// check user admin

router.get("/users/admin/:email", verifyToken, CheckAdmin);

// statistics
router.get("/order-stats", verifyToken, verifyAdmin, orderStats);

// admin-stats
router.get("/admin-stats", adminStats);

module.exports = router;
