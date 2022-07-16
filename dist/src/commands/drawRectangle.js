"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawRectangle = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
const drawRectangle = (h, w) => {
    const { x, y } = robotjs_1.default.getMousePos();
    const x0 = Number(x);
    const y0 = Number(y);
    const width = Number(w);
    const height = Number(h);
    const posX1 = x0 - width;
    const posY1 = y0;
    const posX2 = posX1;
    const posY2 = posY1 - height;
    const posX3 = posX2 + width;
    const posY3 = posY2;
    const posX4 = posX3;
    const posY4 = posY3 + height;
    robotjs_1.default.mouseToggle('down');
    robotjs_1.default.mouseToggle('down');
    robotjs_1.default.setMouseDelay(70);
    robotjs_1.default.moveMouseSmooth(posX1, posY1);
    robotjs_1.default.moveMouseSmooth(posX2, posY2);
    robotjs_1.default.moveMouseSmooth(posX3, posY3);
    robotjs_1.default.moveMouseSmooth(posX4, posY4);
    robotjs_1.default.mouseToggle('up');
};
exports.drawRectangle = drawRectangle;
