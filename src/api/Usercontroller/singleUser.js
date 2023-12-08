const User = require("../../models/User");

const singleUser = async (req, res) => {
  const { email } = req.params;
  try {
    if (email !== req.user.email) {
      return res.status(403).send({ message: "unauthorized" });
    }
    const query = { email: email };
    const user = await User.findOne(query);
    res.send(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = singleUser;
