import { block } from './levels';
import { Controller, Level, PlayerProperties } from './types/index.';

export const getPlayer = (level: Level, { tv }: Controller) => {
    const props: PlayerProperties = {
        pos: { x: level.start.x, y: level.start.y },
        absPos: { x: level.start.x, y: level.start.y },
        vel: { x: 0, y: 0 },
        speed: 0.5,
        move: 'none',
        face: 'up',
        stop: () => {},
    };

    props.stop = () => {
        props.vel.x = 0;
        props.vel.y = 0;
        props.move = 'none';
    };

    const input = ({ key }: KeyboardEvent) => {
        if (props.move !== 'none') return;
        if (key === 'w' || key === 'W') {
            props.move = 'up';
            props.vel.y = -props.speed;
        }
        if (key === 's' || key === 'S') {
            props.move = 'down';
            props.vel.y = props.speed;
        }
        if (key === 'a' || key === 'A') {
            props.move = 'left';
            props.vel.x = -props.speed;
        }
        if (key === 'd' || key === 'D') {
            props.move = 'right';
            props.vel.x = props.speed;
        }
    };

    window.addEventListener('keydown', input, false);
    // window.addEventListener('keyup', () => {
    //     props.move = 'none';
    //     props.vel.x = 0;
    //     props.vel.y = 0;
    // });

    const direction: Record<string, () => void> = {
        up: () => {
            const upAt = level.map[props.absPos.y][props.absPos.x];
            // const leftAt = level.map[props.absPos.y][props.absPos.x];
            block[upAt].collide(props, {
                x: props.pos.x,
                y: props.absPos.y + 1,
            });
        },
        down: () => {
            const downAt = level.map[props.absPos.y + 1][props.absPos.x];
            block[downAt].collide(props, { x: props.pos.x, y: props.absPos.y });
        },
        left: () => {
            const leftAt = level.map[props.absPos.y][props.absPos.x];
            block[leftAt].collide(props, {
                x: props.absPos.x + 1,
                y: props.pos.y,
            });
        },
        right: () => {
            const rightAt = level.map[props.absPos.y][props.absPos.x + 1];
            block[rightAt].collide(props, {
                x: props.absPos.x,
                y: props.pos.y,
            });
        },
    };

    const update = () => {
        props.pos.x += props.vel.x;
        props.pos.y += props.vel.y;
        props.absPos.x = Math.floor(props.pos.x);
        props.absPos.y = Math.floor(props.pos.y);

        if (props.move !== 'none') direction[props.move]();
    };

    const show = () => {
        tv.fillRect(props.pos.x, props.pos.y, 1, 1, 'blue');
        tv.strokeRect(props.pos.x, props.pos.y, 1, 1, 'white');
    };

    return { update, show };
};
