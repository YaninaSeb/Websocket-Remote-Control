import robot from 'robotjs';

export const drawSquare = (px: string): void => {
    const { x, y } = robot.getMousePos();
    const length = Number(px);
    const x0 = Number(x);
    const y0 = Number(y);

    let posX1 = x0 - length;
    let posY1 = y0;

    let posX2 = posX1;
    let posY2 = y0 - length;

    let posX3 = posX1 + length;
    let posY3 = posY2;

    let posX4 = posX3;
    let posY4 = posY3 + length;

    robot.mouseToggle('down');
    robot.mouseToggle('down');
    robot.setMouseDelay(70);
    robot.moveMouseSmooth(posX1, posY1);
    robot.moveMouseSmooth(posX2, posY2);
    robot.moveMouseSmooth(posX3, posY3);
    robot.moveMouseSmooth(posX4, posY4);
    robot.mouseToggle('up');
}