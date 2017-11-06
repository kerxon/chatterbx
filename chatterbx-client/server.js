const logger = require('morgan');
const io = require('socket.io')();
const port = 8000;

io.set('origins', ["localhost:3000"]);

io.on('connection', (client) => {
    client.on('message', (message) => {
        client.emit(message);
    });
});

io.listen(port);
console.log(`listening on ${port}`);
