const Message = require("../models/Message");
const Conversation = require("../models/Conversation");

module.exports = {
  async getMessages(req, res) {
    try {
      const conversationId = req.params.conversationId;
      const messages = await Message.find({ conversationId })
        .populate("sender", "name")
        .sort({ createdAt: "asc" });

      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async saveMessage(userId, recepientId, conversationId, content) {
    try {
      const message = await Message.create({
        senderId: userId,
        recipientId: recepientId,
        conversationId,
        content,
      });

      const conversationFind = await Conversation.findById(conversationId);

      await conversationFind.addMessage(message);

      return message;
    } catch (error) {
      throw error;
    }
  },
};
