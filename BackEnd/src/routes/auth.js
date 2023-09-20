// routes/auth.js
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

// Rota para registrar um novo usuário
router.post("/register", AuthController.registerUser);

// Rota para autenticar um usuário
router.post("/login", AuthController.loginUser);

module.exports = router;
