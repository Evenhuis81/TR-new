const calculated = () => {
    // NOOP
    return 1;
}

export const showSwitch = (level: Array<Array<string>>, ctx: CanvasRenderingContext2D, x: number, y: number, scale: number) => {
    // const x = calculated();
    // const y = calculated();
    switch (level[y][x]) {
        case 'X':
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'purple';

            ctx.beginPath();
            ctx.rect(
                x * scale,
                y * scale,
                scale,
                scale
            );
            ctx.fill();
            ctx.stroke();
            break;
        case '.':
            // ctx.strokeStyle = 'purple';
            // ctx.rect(
            //     x * scale,
            //     y * scale,
            //     scale,
            //     scale
            // );
            // ctx.stroke();
            break;
    }
}