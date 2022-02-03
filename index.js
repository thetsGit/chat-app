const express = require("express");
const socket = require("socket.io");

const app = express();
const io = socket();

app.get("/", (req, res) => {
  res.send("index page").end();
});

const port = 3001;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
io.on("connection", (socket) => {
  console.log("socket connection established" + socket.id);
});
