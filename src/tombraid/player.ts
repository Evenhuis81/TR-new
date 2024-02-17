export const player = (ctx: CanvasRenderingContext2D, map: any) => {
    const props = {
        pos: {
            x: map.playerStart.x * map.blockSize,
            y: map.playerStart.y * map.blockSize,
        },
        direction: 'none',
        speedY: 0,
        speedX: 0,
    };

    const directionCheck = (
        yCor1: number,
        yCor2: number,
        xCor1: number,
        xCor2: number
    ) => {
        props.pos.y += props.speedY;
        props.pos.x += props.speedX;

        const x =
            (props.pos.x + xCor1 - (props.pos.x % map.blockSize)) /
            map.blockSize;
        const y =
            (props.pos.y + yCor1 - (props.pos.y % map.blockSize)) /
            map.blockSize;

        if (map.content[y][x] === 'X') {
            props.speedY = 0;
            props.speedX = 0;

            if (props.direction === 'left' || props.direction === 'right')
                props.pos.x = x * map.blockSize + xCor2;
            else if (props.direction === 'up' || props.direction === 'down')
                props.pos.y = y * map.blockSize + yCor2;

            props.direction = 'none';
        }
    };

    const direction: Record<string, () => void> = {
        none: () => {},
        up: () => directionCheck(0, map.blockSize, 0, 0),
        down: () => directionCheck(map.blockSize, -map.blockSize, 0, 0),
        left: () => directionCheck(0, 0, 0, map.blockSize),
        right: () => directionCheck(0, 0, map.blockSize, -map.blockSize),
    };

    const update = () => {
        direction[props.direction]();
    };

    const show = () => {
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'red';

        ctx.beginPath();
        ctx.rect(props.pos.x, props.pos.y, map.blockSize, map.blockSize);
        ctx.fill();
        ctx.stroke();
    };

    const input = (key: string) => {
        if (props.direction !== 'none') return;
        if (key === 'w' || key === 'W') {
            props.direction = 'up';
            props.speedY = -8;
        }
        if (key === 's' || key === 'S') {
            props.direction = 'down';
            props.speedY = 8;
        }
        if (key === 'a' || key === 'A') {
            props.direction = 'left';
            props.speedX = -8;
        }
        if (key === 'd' || key === 'D') {
            props.direction = 'right';
            props.speedX = 8;
        }
    };

    return { update, show, input };
};
