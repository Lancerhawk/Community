const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: String,
  collegeName: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, default: 'User', required: true },
  isVerified: { type: Boolean, default: true }
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
