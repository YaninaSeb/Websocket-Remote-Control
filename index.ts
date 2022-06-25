import { httpServer } from './src/http_server/index';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { getMousePosition, setMouseUp, setMouseDown, setMouseLeft, setMouseRight } from './src/commands/navigation';
import { drawCircle } from './src/commands/drawCircle';
import { drawSquare } from './src/commands/drawSquare';
import { drawRectangle } from './src/commands/drawRectangle';
import { getScreen } from './src/commands/screen';
import { consoleMessage } from './src/commands/consoleMessage';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
});

wss.on('connection', (ws) => {
    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

    duplex.on('data', async (chunk) => {
        try {
            const [command, px1, px2] = (`${chunk}`).split(' ');
            console.log(`Received: ${chunk}`);

            switch (command) {
                case 'mouse_position':
                    const message = getMousePosition();
                    duplex.write(`${message}\0`, 'utf-8');
                    consoleMessage(command);
                    break;
                case 'mouse_up':
                    setMouseUp(px1);
                    duplex.write('mouse_up\0');
                    consoleMessage(command);
                    break;
                case 'mouse_down':
                    setMouseDown(px1);
                    duplex.write('mouse_down\0');
                    consoleMessage(command);
                    break;
                case 'mouse_left':
                    setMouseLeft(px1);
                    duplex.write('mouse_left\0');
                    consoleMessage(command);
                    break;
                case 'mouse_right':
                    setMouseRight(px1);
                    duplex.write('mouse_right\0');
                    consoleMessage(command);
                    break;
                case 'draw_circle':
                    duplex.write('draw_circle\0');
                    drawCircle(px1);
                    consoleMessage(command);
                    break;
                case 'draw_square':
                    duplex.write('draw_square\0');
                    drawSquare(px1);
                    consoleMessage(command);
                    break;
                case 'draw_rectangle':
                    duplex.write('draw_rectangle\0');
                    drawRectangle(px1, px2);
                    consoleMessage(command);
                    break;
                case 'prnt_scrn':
                    const base64 = await getScreen();
                    duplex.write(`prnt_scrn ${base64}\0`);
                    consoleMessage(command);
                    break;
            }
        } catch (err) {
            console.log('Some error');
        }
    });

    ws.on('close', () => {
        console.log('\nThe websocket has closed\n');
    });

    process.on('SIGINT', () => {
        process.stdout.write('\nClosing websocket...\n');
        ws.close();
        wss.close();
        process.exit();
    });

});
