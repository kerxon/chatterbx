import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


function subscribeToMessages(message, cb) {
    const m = message;
    socket.on('updateMessages', (data) => {
        cb(null, data)
    });
    socket.emit('subscribeToMessages', m);
}

function sendMessage(message) {
    socket.emit('newMessage', message);
}

export { subscribeToMessages, sendMessage };