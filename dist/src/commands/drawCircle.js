"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawCircle = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
const drawCircle = (r) => {
    const radius = Number(r);
    const mousePos = robotjs_1.default.getMousePos();
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        if (i == 0.03) {
            robotjs_1.default.mouseToggle('down');
            robotjs_1.default.mouseToggle('down');
        }
        const x = mousePos.x + (radius * Math.cos(i));
        const y = mousePos.y + (radius * Math.sin(i));
        robotjs_1.default.dragMouse(x, y);
    }
    robotjs_1.default.mouseToggle('up');
};
exports.drawCircle = drawCircle;
