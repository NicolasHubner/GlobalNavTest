// routes/auth.js
const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");
const isAuthenticated = require("../middlewares/authMiddleware");

//@route POST /chat/send

router.post("/send", isAuthenticated, MessageController.sendMessage);

//@route GET /chat/list

router.get("/list", isAuthenticated, MessageController.listMessages);

module.exports = router;
