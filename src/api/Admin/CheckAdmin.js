const User = require("../../models/User");

const CheckAdmin = async (req, res) => {
  const email = req.params.email;
  if (email !== req.user.email) {
    return res.status(403).send({ message: "unauthorized" });
  }
  const query = { email: email };
  const user = await User.findOne(query);
  let admin = false;
  if (user) {
    admin = user?.role === "admin";
  }
  res.send({ admin });
};

module.exports = CheckAdmin;
