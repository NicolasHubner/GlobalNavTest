const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const mongoose = require("mongoose");

const { createServer } = require("http");
const { Server } = require("socket.io");

const authRoutes = require("./src/routes/auth");
const conversationRoutes = require("./src/routes/conversation");
const chatRoutes = require("./src/routes/chat");

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

// Conectar ao MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Definir rotas aqui...

// Rota para testar o token

app.get("/test", (req, res) => {
  res.json({ message: "Rota protegida" });
});

app.use("/auth", authRoutes);

app.use("/conversation", conversationRoutes);

app.use("/chat", chatRoutes);

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log(`Usuário conectado: ${socket.id}`);

  socket.on("join", (conversationId) => {
    socket.join(conversationId);
    console.log(`Usuário ${socket.id} entrou na sala ${conversationId}`);
  });

  socket.on("message", async (messageData) => {
    // Lógica para salvar a mensagem e emitir para os participantes da conversa
    await MessageService.saveMessage(
      messageData.senderId,
      messageData.conversationId,
      messageData.content
    );

    // Emitir a mensagem para todos os participantes da conversa
    io.to(messageData.conversationId).emit("message", messageData);
  });

  socket.on("chat", (msg) => {
    console.log(msg);
    io.emit("chat", msg);
  });

  socket.on("disconnect", () => {
    console.log(`Usuário desconectado: ${socket.id}`);
  });
});

httpServer.listen(4000, () => {
  console.log("listening on *:4000");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
