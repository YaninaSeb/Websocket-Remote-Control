"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMouseRight = exports.setMouseLeft = exports.setMouseDown = exports.setMouseUp = exports.getMousePosition = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
const getMousePosition = () => {
    const { x, y } = robotjs_1.default.getMousePos();
    const message = `mouse_position ${x},${y}`;
    return message;
};
exports.getMousePosition = getMousePosition;
const setMouseUp = (px) => {
    const { x, y } = robotjs_1.default.getMousePos();
    const newPosY = Number(y) - Number(px);
    robotjs_1.default.moveMouse(x, newPosY);
};
exports.setMouseUp = setMouseUp;
const setMouseDown = (px) => {
    const { x, y } = robotjs_1.default.getMousePos();
    const newPosY = Number(y) + Number(px);
    robotjs_1.default.moveMouse(x, newPosY);
};
exports.setMouseDown = setMouseDown;
const setMouseLeft = (px) => {
    const { x, y } = robotjs_1.default.getMousePos();
    const newPosX = Number(x) - Number(px);
    robotjs_1.default.moveMouse(newPosX, y);
};
exports.setMouseLeft = setMouseLeft;
const setMouseRight = (px) => {
    const { x, y } = robotjs_1.default.getMousePos();
    const newPosX = Number(x) + Number(px);
    robotjs_1.default.moveMouse(newPosX, y);
};
exports.setMouseRight = setMouseRight;
