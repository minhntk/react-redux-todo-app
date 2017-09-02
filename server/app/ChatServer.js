var socketio = require('socket.io');
var io;

exports.listen = function(server){

    io = socketio.listen(server);

    io.sockets.on('connection', function(socket){
        console.log('a user connected');
        joinRoom(socket, 'Test');
    });
}

function joinRoom(socket, room){
    socket.emit('joinResult', {room: 'room'});
}