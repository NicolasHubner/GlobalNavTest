// controllers/AuthController.js
const AuthService = require("../services/AuthServices");

// Controlador para lidar com rotas de autenticação
const AuthController = {
  async registerUser(req, res) {
    try {
      // Chame a função do AuthService para registrar um usuário
      const result = await AuthService.registerUser(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async loginUser(req, res) {
    try {
      // Chame a função do AuthService para autenticar um usuário
      const result = await AuthService.loginUser(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = AuthController;
