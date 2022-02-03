const express = require("express");
const socket = require("socket.io");

const app = express();

app.get("/", (req, res) => {
  res.send("index page").end();
});

const port = 3001;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
