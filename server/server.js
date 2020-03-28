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
const echoName = (name) => {
    console.log(`In echoName. name=${name}`);
};

io.on('connection', function (socket) {
    console.log('Info: new connection');
    socket.on('name', echoName);
    socket.on('disconnect', function () {
        console.log('Info: disconnection');
    });
    socket.on('error', function (err) {
        console.error(`Socket Error: ${err}`);
    });
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
