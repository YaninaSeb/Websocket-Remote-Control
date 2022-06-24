import { httpServer } from './src/http_server/index';
import WebSocket, { createWebSocketStream, WebSocketServer } from 'ws';
import { getMousePosition, setMouseUp, setMouseDown, setMouseLeft, setMouseRight } from './src/commands/navigation';
import { drawCircle } from './src/commands/drawCircle';
import { drawSquare } from './src/commands/drawSquare';
import { drawRectangle } from './src/commands/drawRectangle';
import { getScreen } from './src/commands/screen';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
});

wss.on('connection', (ws) => {
    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

    duplex.on('data', async (chunk) => {
        console.log(chunk);
        let [command, px1, px2] = (`${chunk}`).split(' ');

        switch (command) {
            case 'mouse_position':
                let message = getMousePosition();
                duplex.write(message, 'utf-8');
                break;
            case 'mouse_up':
                setMouseUp(px1);
                duplex.write('mouse_up');
                break;
            case 'mouse_down':
                setMouseDown(px1);
                duplex.write('mouse_down');
                break;
            case 'mouse_left':
                setMouseLeft(px1);
                duplex.write('mouse_left');
                break;
            case 'mouse_right':
                setMouseRight(px1);
                duplex.write('mouse_right');
                break;
            case 'draw_circle':
                duplex.write('draw_circle');
                drawCircle(px1);
                break;
            case 'draw_square':
                duplex.write('draw_square');
                drawSquare(px1);
                break;
            case 'draw_rectangle':
                duplex.write('draw_rectangle');
                drawRectangle(px1, px2);
                break;
            case 'prnt_scrn':
                const base64 = await getScreen();
                duplex.write(`prnt_scrn ${base64}`);
                break;
        }
    });
    duplex.on('end', () => {
        console.log("The duplex channel has closed") 
    });

    ws.on('close', () => {
        console.log("The websocket has closed")
    });
});

wss.on('close', () => {
    console.log("The WebSocketServer has closed")
});
