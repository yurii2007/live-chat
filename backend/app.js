const { Server } = require("socket.io");
const { createServer } = require("http");

const serverHTTP = createServer();

const serverWS = new Server(serverHTTP, {
  cors: { origin: "*" },
});

serverWS.on("connection", (socket) => {
  console.log("New user successfully connected");
  socket.on("chat-msg", msg => {
    socket.broadcast.emit("chat-msg", msg)
  })
});

serverHTTP.listen(3000)