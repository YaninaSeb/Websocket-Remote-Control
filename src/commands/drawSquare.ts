import robot from 'robotjs';

export const drawSquare = (px: string): void => {
    const { x, y } = robot.getMousePos();
    const length = Number(px);
    const x0 = Number(x);
    const y0 = Number(y);

    const posX1 = x0 - length;
    const posY1 = y0;

    const posX2 = posX1;
    const posY2 = y0 - length;

    const posX3 = posX1 + length;
    const posY3 = posY2;

    const posX4 = posX3;
    const posY4 = posY3 + length;

    robot.mouseToggle('down');
    robot.mouseToggle('down');
    robot.setMouseDelay(70);
    robot.moveMouseSmooth(posX1, posY1);
    robot.moveMouseSmooth(posX2, posY2);
    robot.moveMouseSmooth(posX3, posY3);
    robot.moveMouseSmooth(posX4, posY4);
    robot.mouseToggle('up');
};
