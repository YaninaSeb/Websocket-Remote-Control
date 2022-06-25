import robot from 'robotjs';

export const drawCircle = (r: string): void => {
    const mousePos = robot.getMousePos();

    robot.mouseToggle('down');
    robot.mouseToggle('down');
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const x = mousePos.x + (Number(r) * Math.cos(i));
        const y = mousePos.y + (Number(r) * Math.sin(i));
        
        robot.dragMouse(x, y);
    }
    robot.mouseToggle('up');
};
