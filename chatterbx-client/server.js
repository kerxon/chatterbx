const logger = require('morgan');
const io = require('socket.io')();
const port = 8000;

io.set('origins', ["localhost:3000"]);

io.on('connection', (client) => {
    console.log('connected client');
    client.on('subscribeToMessages', (state) => {
        console.log('message', state);
        client.emit('message', state);
    });
    client.on('newMessage', (newMessage) => {
        console.log('newMessage', newMessage);
        client.emit('updateMessages', newMessage)
    });
});

io.listen(port);
console.log(`listening on ${port}`);
