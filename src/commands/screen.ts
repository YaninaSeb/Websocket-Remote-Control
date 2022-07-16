import robot, { Bitmap } from 'robotjs';
import Jimp from 'jimp';
 

export const getScreen = async () => {
    try {
        const { x, y } = robot.getMousePos();
        const size = 100;

        const image = <Bitmap>robot.screen.capture(x - size, y - size, size * 2, size * 2);
        const jimp = new Jimp({
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
        
        const base64Image: string = await jimp.getBase64Async(Jimp.MIME_PNG);
        const base64e: string = base64Image.split(',')[1];

        return base64e;

    } catch (err) {
        console.log('Some error');
    }
};
