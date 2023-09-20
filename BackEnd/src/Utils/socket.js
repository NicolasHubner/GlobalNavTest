// socket.js
const socketIo = require("socket.io");

let io;

module.exports = {
  init(server) {
    io = socketIo(server);
    console.log("Socket.io inicializado.");
    return io;
  },
  getIo() {
    if (!io) {
      throw new Error("Socket.io não inicializado.");
    }
    return io;
  },
};
