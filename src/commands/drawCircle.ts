import robot from 'robotjs';

export const drawCircle = (r: string): void => {
    const radius = Number(r);
    const mousePos = robot.getMousePos();
    let x: number;
    let y: number;

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        if (i == 0.03) {
            robot.mouseToggle('down');
            robot.mouseToggle('down');
        }
        x = mousePos.x + (radius * Math.cos(i));
        y = mousePos.y + (radius * Math.sin(i));

        robot.dragMouse(x, y);
    }

    robot.mouseToggle('up');
};
