import robot from 'robotjs';

export const getMousePosition = (ws: any) => {
    const { x, y } = robot.getMousePos();

    ws.send(`mouse_position_${x}px,${y}px`);
}
