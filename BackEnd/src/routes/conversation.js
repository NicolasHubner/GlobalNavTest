// routes/conversations.js
const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/ConversationController");
const isAuthenticated = require("../middlewares/authMiddleware");

// Rota para listar conversas do usuário autenticado
// @route GET /conversation/list
router.get("/list", isAuthenticated, conversationController.listConversations);

// Rota para criar uma nova conversa
// @route POST /conversation/create
router.post(
  "/create",
  isAuthenticated,
  conversationController.createConversations
);

module.exports = router;
