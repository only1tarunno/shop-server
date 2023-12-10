const User = require("../../models/User");

const allUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 6;

    const result = await User.find()
      .skip(page * size)
      .limit(size);

    const count = await User.estimatedDocumentCount();

    res.send({ result, count });
  } catch (error) {
    res.json({ error: "Internal server error" });
  }
};

module.exports = allUsers;
