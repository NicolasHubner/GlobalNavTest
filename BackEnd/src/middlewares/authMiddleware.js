// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const config = require("../../config");

function isAuthenticated(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  // Verifique o token JWT
  jwt.verify(
    token.replace("Bearer ", ""),
    config.secretOrKey,
    (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Token inválido" });
      }

      // Adicione o ID do usuário autenticado ao objeto de solicitação
      req.userId = decoded.id;
      next();
    }
  );
}

module.exports = isAuthenticated;
