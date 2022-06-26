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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScreen = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
const jimp_1 = __importDefault(require("jimp"));
const getScreen = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { x, y } = robotjs_1.default.getMousePos();
        const size = 100;
        const image = robotjs_1.default.screen.capture(x - size, y - size, size * 2, size * 2);
        const jimp = new jimp_1.default({
            'data': image.image,
            'width': image.width,
            'height': image.height
        });
        jimp.scan(0, 0, jimp.bitmap.width, jimp.bitmap.height, (posX, posY, idx) => {
            const color = image.colorAt(posX, posY);
            const red = parseInt(color[0] + color[1], 16);
            const green = parseInt(color[2] + color[3], 16);
            const blue = parseInt(color[4] + color[5], 16);
            jimp.bitmap.data[idx + 0] = Number(red);
            jimp.bitmap.data[idx + 1] = Number(green);
            jimp.bitmap.data[idx + 2] = Number(blue);
            jimp.bitmap.data[idx + 3] = 255;
        });
        const base64Image = yield jimp.getBase64Async(jimp_1.default.MIME_PNG);
        const base64e = base64Image.split(',')[1];
        return base64e;
    }
    catch (err) {
        console.log('Some error');
    }
});
exports.getScreen = getScreen;
