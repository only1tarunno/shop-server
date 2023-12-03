const createAuthCookie = require("../../api/authenticationJWT/createAuthCookie");
const router = require("express").Router();

router.post("/jwt", createAuthCookie);

module.exports = router;
