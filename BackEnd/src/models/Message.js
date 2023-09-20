// models/Message.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Referência ao modelo de usuário, substitua 'User' pelo nome do seu modelo de usuário, se necessário.
    required: true,
  },
  recipientId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Referência ao modelo de usuário, substitua 'User' pelo nome do seu modelo de usuário, se necessário.
    required: true,
  },
  conversationId: {
    type: Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
