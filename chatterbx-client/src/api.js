import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToMessages(cb) {
    socket.on('connection', (messages) => {
        cb(null, messages);
    });
    socket.emit('message');
}

export { subscribeToMessages };