let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
});

http.listen(3000, () => {
  console.log("Listening on 3000");
});
