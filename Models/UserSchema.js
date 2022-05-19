const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, minLength: 3, maxLength: 30, required: true },
  email: {
    type: String,
    minLength: 3,
    maxLength: 50,
    unique: true,
    required: true,
  },
  password: { type: String, minLength: 6, maxLength: 100, required: true },
  admin: { type: Boolean, default: false },
  creatAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
