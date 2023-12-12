const userActivities = require("../../api/Statistics/userActivities");
const allUsers = require("../../api/Usercontroller/allUser");
const createUser = require("../../api/Usercontroller/createUser");
const singleUser = require("../../api/Usercontroller/singleUser");
const userProfileUpdate = require("../../api/Usercontroller/userProfileUpdate");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");
const router = require("express").Router();

// get a single user
router.get("/users/:email", verifyToken, singleUser);

// get all user
router.get("/admin/allUsers", verifyToken, verifyAdmin, allUsers);

// create a user
router.post("/users", createUser);

// update a user
router.patch("/users/:email", verifyToken, userProfileUpdate);

// admin can update user
router.patch(
  "/admin/userUpdate/:email",
  verifyToken,
  verifyAdmin,
  userProfileUpdate
);

// userActivites api for dashboard chart
router.get("/userActivities/:email", userActivities);

module.exports = router;
