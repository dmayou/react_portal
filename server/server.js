const express = require('express');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

// Serve static files
app.use(express.static('build'));

// Routes
app.get('/api/ping', function(req, res) {
    res.sendStatus(200);
});

// Socket io
io.on('connection', function (socket) {
    console.log('Info: new connection');
    socket.on('disconnect', function () {
        console.log('Info: disconnection');
    });
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
