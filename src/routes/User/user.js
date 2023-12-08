const createUser = require("../../api/Usercontroller/createUser");
const singleUser = require("../../api/Usercontroller/singleUser");
const userProfileUpdate = require("../../api/Usercontroller/userProfileUpdate");
const verifyToken = require("../../middleWares/verifyToken");
const router = require("express").Router();

// get a single user
router.get("/users/:email", verifyToken, singleUser);
// create a user
router.post("/users", createUser);
// update a user
router.patch("/users/:email", verifyToken, userProfileUpdate);

module.exports = router;
