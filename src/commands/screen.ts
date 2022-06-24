import robot from 'robotjs';
import Jimp from 'jimp';
 

export const getScreen = async () => {
    const { x, y } = robot.getMousePos();
    const size = 200;
    
    let image = robot.screen.capture(x - size, y - size, size, size);
    const jimp = new Jimp({
        'data': image.image,
        'width': image.width,
        'height': image.height
    });
    
    const base64Image = await jimp.getBase64Async(Jimp.MIME_PNG);
    const base64e = base64Image.split(',')[1];

    return base64e;
}
