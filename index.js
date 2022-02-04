//import required files
const express = require("express");
const socket = require("socket.io");

//app setup
const app = express();

//routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//server setup
const port = 3001;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

//socket setup+
const io = socket(server);
io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
});
