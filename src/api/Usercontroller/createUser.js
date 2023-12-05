const User = require("../../models/User");

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const existingUser = await User.findOne({ email: userData.email });

    if (existingUser) {
      return res.send({ message: "User already exists" });
    } else {
      const result = await User.create(userData);
      res.send(result);
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = createUser;
