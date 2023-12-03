require("dotenv").config();
const jwt = require("jsonwebtoken");

const createAuthCookie = async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "365d",
  });
  res.send({ token });
};

module.exports = createAuthCookie;
