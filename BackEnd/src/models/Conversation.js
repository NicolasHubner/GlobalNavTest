// models/Conversation.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "users", // Referência ao modelo de usuário, substitua 'User' pelo nome do seu modelo de usuário, se necessário.
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message", // Referência ao modelo de mensagem, substitua 'Message' pelo nome do seu modelo de mensagem, se necessário.      ",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

conversationSchema.methods.addMessage = function (message) {
  this.messages.push(message);
  return this.save();
};

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
