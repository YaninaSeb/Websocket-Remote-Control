"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/http_server/index");
const ws_1 = require("ws");
const navigation_1 = require("./src/commands/navigation");
const drawCircle_1 = require("./src/commands/drawCircle");
const drawSquare_1 = require("./src/commands/drawSquare");
const drawRectangle_1 = require("./src/commands/drawRectangle");
const screen_1 = require("./src/commands/screen");
const consoleMessage_1 = require("./src/commands/consoleMessage");
const HTTP_PORT = 3000;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
index_1.httpServer.listen(HTTP_PORT);
const wss = new ws_1.WebSocketServer({
    port: 8080,
});
wss.on('connection', (ws) => {
    const duplex = (0, ws_1.createWebSocketStream)(ws, { encoding: 'utf8', decodeStrings: false });
    duplex.on('data', (chunk) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [command, px1, px2] = (`${chunk}`).split(' ');
            console.log(`Received: ${chunk}`);
            switch (command) {
                case 'mouse_position':
                    const message = (0, navigation_1.getMousePosition)();
                    duplex.write(`${message}\0`, 'utf-8');
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
                case 'mouse_up':
                    (0, navigation_1.setMouseUp)(px1);
                    duplex.write('mouse_up\0');
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
                case 'mouse_down':
                    (0, navigation_1.setMouseDown)(px1);
                    duplex.write('mouse_down\0');
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
                case 'mouse_left':
                    (0, navigation_1.setMouseLeft)(px1);
                    duplex.write('mouse_left\0');
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
                case 'mouse_right':
                    (0, navigation_1.setMouseRight)(px1);
                    duplex.write('mouse_right\0');
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
                case 'draw_circle':
                    duplex.write('draw_circle\0');
                    (0, drawCircle_1.drawCircle)(px1);
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
                case 'draw_square':
                    duplex.write('draw_square\0');
                    (0, drawSquare_1.drawSquare)(px1);
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
                case 'draw_rectangle':
                    duplex.write('draw_rectangle\0');
                    (0, drawRectangle_1.drawRectangle)(px1, px2);
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
                case 'prnt_scrn':
                    const base64 = yield (0, screen_1.getScreen)();
                    duplex.write(`prnt_scrn ${base64}\0`);
                    (0, consoleMessage_1.consoleMessage)(command);
                    break;
            }
        }
        catch (err) {
            console.log('Some error');
        }
    }));
    ws.on('close', () => {
        process.stdout.write('\nClosing websocket...\n');
    });
    process.on('SIGINT', () => {
        ws.close();
        wss.close();
        process.exit();
    });
});
