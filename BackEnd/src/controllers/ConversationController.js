// controllers/conversationController.js
const Conversation = require("../models/Conversation");

// Controlador para listar as conversas de um usuário
async function listConversations(req, res) {
  try {
    const userId = req.userId;
    const conversations = await Conversation.find({ participants: userId })
      .populate("participants", "name") // Popule os participantes da conversa
      .populate("messages", "content timestamp senderId");

    res.json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createConversations(req, res) {
  try {
    const userId = req.userId;

    const newConversation = await Conversation.create({
      participants: [userId, req.body.receiverId],
    });

    res.json(newConversation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  listConversations,
  createConversations,
};
