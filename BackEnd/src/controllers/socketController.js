// socketController.js
const { Server } = require("socket.io");

function init(server) {
  const io = new Server(7093, server);

  io.on("connection", (socket) => {
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

    io.listen(7093);

    socket.on("disconnect", () => {
      console.log(`Usuário desconectado: ${socket.id}`);
    });
  });
}

function getIo() {
  if (!io) {
    throw new Error("Socket.io não inicializado.");
  }
  return io;
}

module.exports = {
  init,
  getIo,
};
