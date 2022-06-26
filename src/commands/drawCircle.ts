import robot from 'robotjs';

export const drawCircle = (r: string): void => {
    const radius = Number(r);
    const mousePos = robot.getMousePos();

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        if (i == 0.03) {
            robot.mouseToggle('down');
            robot.mouseToggle('down');
        }
        const x = mousePos.x + (radius * Math.cos(i));
        const y = mousePos.y + (radius * Math.sin(i));

        robot.dragMouse(x, y);
    }

    robot.mouseToggle('up');
};
