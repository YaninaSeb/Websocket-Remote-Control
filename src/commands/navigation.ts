import robot from 'robotjs';

export const getMousePosition = (): any => {
    const { x, y } = robot.getMousePos();

    return { x, y }
}

export const setMouseUp = (ws: any, px: string) => {
    let { x, y } = getMousePosition();
    let newPosY = Number(y) - Number(px);

    robot.moveMouse(x, newPosY);
    ws.send('Mouse_up');
}

export const setMouseDown = (ws: any, px: string) => {
    let { x, y } = getMousePosition();
    let newPosY = Number(y) + Number(px);

    robot.moveMouse(x, newPosY);
    ws.send('Mouse_down');
}

export const setMouseLeft = (ws: any, px: string) => {
    let { x, y } = getMousePosition();
    let newPosX = Number(x) - Number(px);

    robot.moveMouse(newPosX, y);
    ws.send('Mouse_left');
}

export const setMouseRight = (ws: any, px: string) => {
    let { x, y } = getMousePosition();
    let newPosX = Number(x) + Number(px);

    robot.moveMouse(newPosX, y);
    ws.send('Mouse_right');
}
