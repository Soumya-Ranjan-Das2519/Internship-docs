const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    maxlength: 50,
  },
  to: {
    type: String,
    required: true,
    maxlength: 50,
  },
  message: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
