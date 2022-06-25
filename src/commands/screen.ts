import robot, { Bitmap } from 'robotjs';
import Jimp from 'jimp';
 

export const getScreen = async () => {
    const { x, y } = robot.getMousePos();
    const size: number = 100;
    
    const image = <Bitmap>robot.screen.capture(x - size, y - size, size * 2, size * 2);
    const jimp = new Jimp({
        'data': image.image,
        'width': image.width,
        'height': image.height
    });
    
    const base64Image: string = await jimp.getBase64Async(Jimp.MIME_PNG);
    const base64e: string = base64Image.split(',')[1];

    return base64e;
};
