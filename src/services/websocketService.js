exports.handleConnection = (socket) => {
    console.log('WebSocket client connected');

    socket.on('message', (data) => {
        console.log('Message received:', data);
    });

    socket.on('disconnect', () => {
        console.log('WebSocket client disconnected');
    });
};
