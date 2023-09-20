// controllers/MessageController.js
const MessageService = require("../services/MessageService");
const io = require("../Utils/socket"); // Importe o objeto Socket.io

module.exports = {
  async sendMessage(req, res) {
    const { recepientId, conversationId, content } = req.body;

    const userId = req.userId;

    try {
      const message = await MessageService.saveMessage(
        userId,
        recepientId,
        conversationId,
        content
      );

      res.json(message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async listMessages(req, res) {
    try {
      console.log("ronaldo22");
      const conversationId = req.params.conversationId;
      console.log(conversationId);
      const messages = await MessageService.getMessages(conversationId);

      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
