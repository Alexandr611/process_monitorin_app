const io = require('socket.io')(3030);
const connections = [];
const SpawnService = require('./service/SpawnService');
const { socketHandlers } = require('./conf/config');

io.on('connection', function (socket) {

    socketHandlers.map( val => {
        setInterval(async () => {
            const data = await SpawnService.getProcessInfo(val.processName);
            socket.emit(val.handlerName, data);
        }, 60 * 1000)
    });

    socket.on('iosdeploy', async () => {
        // @TODO add handler
        console.log('iosdeploy hanler')
        const data = await SpawnService.getProcessInfo('ios-deploy');
        socket.emit('iosdeploy', data);
    });

    socket.on('iosdevice', async () => {
        // @TODO add handler
        const data = await SpawnService.getProcessInfo('ios-deploy');
        socket.emit('iosdeploy', data);
    });

    socket.on('xcodebuild', () => {
       // @TODO add handler
        console.log('xcodebuild hanler')
    });

    socket.on('error', error => {
        console.log('Error', error);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
        io.emit('user disconnected');
    });
});
