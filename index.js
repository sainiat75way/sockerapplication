const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server); // Move this line after creating the server

// socket io
io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
});

const path = require('path');
app.use(express.static(path.resolve("./public")));
app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

server.listen(5002, () => {
  console.log('listening on *:5002'); // Corrected port number in the log statement
});
