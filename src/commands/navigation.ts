import robot from 'robotjs';

export const getMousePosition = (): string => {
    const { x, y } = robot.getMousePos();

    const message = `mouse_position ${x},${y}`;

    return message;
}

export const setMouseUp = (px: string): void => {
    const { x, y } = robot.getMousePos();
    let newPosY = Number(y) - Number(px);

    robot.moveMouse(x, newPosY);
}

export const setMouseDown = (px: string): void => {
    const { x, y } = robot.getMousePos();
    let newPosY = Number(y) + Number(px);

    robot.moveMouse(x, newPosY);
}

export const setMouseLeft = (px: string): void => {
    const { x, y } = robot.getMousePos();
    let newPosX = Number(x) - Number(px);

    robot.moveMouse(newPosX, y);
}

export const setMouseRight = (px: string): void => {
    const { x, y } = robot.getMousePos();
    let newPosX = Number(x) + Number(px);

    robot.moveMouse(newPosX, y);
}
