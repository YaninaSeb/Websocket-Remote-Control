// import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import { getMousePosition } from './src/commands/mousePosition';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
});

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        let [command, x, y] = (`${data}`).split(' ');

        switch (command) {
            case 'mouse_position':
                getMousePosition(ws);
                break;
        }

    });
});

wss.on('close', () => {
    console.log('end');
});
