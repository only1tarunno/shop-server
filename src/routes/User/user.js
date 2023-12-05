const createUser = require("../../api/Usercontroller/createUser");
const router = require("express").Router();

// create a user
router.post("/users", createUser);

module.exports = router;
