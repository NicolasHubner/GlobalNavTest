const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");

const AuthService = {
  async loginUser(userData) {
    const { email, password } = userData;

    try {
      // Procurar o usuário pelo email no banco de dados
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      // Comparar a senha fornecida com a senha armazenada no banco de dados
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        throw new Error("Senha incorreta");
      }

      // Gerar um token JWT
      const payload = { id: user.id, name: user.name };
      const token = jwt.sign(payload, config.secretOrKey, { expiresIn: 3600 }); // Token válido por 1 hora

      return {
        success: true,
        token: "Bearer " + token,
      };
    } catch (error) {
      throw error;
    }
  },
  async registerUser(userData) {
    const { name, email, password } = userData;

    try {
      // Verificar se o usuário já existe
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        throw new Error("Email já registrado");
      }

      // Criar um novo usuário
      const newUser = new User({ name, email, password });

      // Hash da senha antes de salvar no banco de dados
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);

      const savedUser = await newUser.save();

      const payload = { id: savedUser.id, name: savedUser.name };
      const token = jwt.sign(payload, config.secretOrKey, { expiresIn: 3600 }); // Token válido por 1 hora

      return {
        success: true,
        token: "Bearer " + token,
      };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = AuthService;
