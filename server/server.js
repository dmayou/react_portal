const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const eliza = require('./modules/eliza').elizaInit();

const delay = 500; //ms

// Serve static files
app.use(express.static('build'));

// Routes
app.get('/api/ping', function(req, res) {
    res.sendStatus(200);
});

// Socket io
io.on('connection', function (socket) {
    console.log('Info: new connection');
    socket.on('name', function(name) {
        socket.emit(
            'reply',
            `Nice to meet you, ${name}. ${eliza.getInitial()}`,
        );
    });
    socket.on('reply', function(reply) {
        setTimeout(function() {
            //remove punctuation
            reply = reply.replace(/[,.?!]/gi, '');
            socket.emit('reply', eliza.transform(reply));
        }, delay, );
    });
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
