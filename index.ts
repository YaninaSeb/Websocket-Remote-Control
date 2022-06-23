import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import { getMousePosition, setMouseUp, setMouseDown, setMouseLeft, setMouseRight } from './src/commands/navigation';
import { drawCircle } from './src/commands/drawCircle';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
});

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        let [command, px1, px2] = (`${data}`).split(' ');

        switch (command) {
            case 'mouse_position':
                const {x, y} =  getMousePosition();
                ws.send(`mouse_position_${x},${y}`);
                break;
            case 'mouse_up':
                setMouseUp(ws, px1);
                break;
            case 'mouse_down':
                setMouseDown(ws, px1);
                break;
            case 'mouse_left':
                setMouseLeft(ws, px1);
                break;
            case 'mouse_right':
                setMouseRight(ws, px1);
                break;
            case 'draw_circle':
                drawCircle(ws, px1);
                break;
        }

    });
});

wss.on('close', () => {
    console.log('end');
});
