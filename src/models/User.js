const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
});

const User = model("User", UserSchema);

module.exports = User;
