// import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
// import robot from 'robotjs';
import { WebSocketServer } from 'ws';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
});

wss.on('connection', (ws) => {

    ws.on('message', () => {
        ws.send('position');
    });
});

wss.on('close', () => {
    console.log('end');
});


