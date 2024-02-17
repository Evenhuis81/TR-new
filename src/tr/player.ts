import { Controller, InputKey, Level, PlayerProperties } from './types/index.';

export const getPlayer = (level: Level, { tv }: Controller) => {
    const props: PlayerProperties = {
        pos: { x: level.start.x, y: level.start.y },
        absPos: { x: level.start.x, y: level.start.y },
        vel: { x: 0, y: 0 },
        speed: 0.5,
        move: 'none',
        face: 'none',
    };

    const keyInOut = (event: KeyboardEvent) => {
        if (
            event.key === 'w' ||
            event.key === 's' ||
            event.key === 'a' ||
            event.key === 'd' ||
            event.key === 'W' ||
            event.key === 'S' ||
            event.key === 'A' ||
            event.key === 'D'
        )
            input(event.type === 'keydown' ? event.key : 'release');
    };

    window.addEventListener('keydown', keyInOut, false);
    // window.addEventListener('keyup', keyInOut, false);

    const update = () => {
        props.pos.x += props.vel.x;
        props.pos.y += props.vel.y;
        props.absPos.x = Math.floor(props.pos.x);
        props.absPos.y = Math.floor(props.pos.y);

        // collision + resolve
        if (props.move === 'up') {
            if (level.map[props.absPos.y][props.absPos.x] === 'X') {
                props.vel.y = 0;
                props.pos.y = props.absPos.y + 1;
                props.move = 'none';
            }
        } else if (props.move === 'down') {
            if (level.map[props.absPos.y + 1][props.absPos.x] === 'X') {
                props.vel.y = 0;
                props.pos.y = props.absPos.y;
                props.move = 'none';
            }
        } else if (props.move === 'left') {
            if (level.map[props.absPos.y][props.absPos.x] === 'X') {
                props.vel.x = 0;
                props.pos.x = props.absPos.x + 1;
                props.move = 'none';
            }
        } else if (props.move === 'right') {
            if (level.map[props.absPos.y][props.absPos.x + 1] === 'X') {
                props.vel.x = 0;
                props.pos.x = props.absPos.x;
                props.move = 'none';
            }
        }
    };

    const show = () => {
        tv.fillRect(props.pos.x, props.pos.y, 1, 1, 'blue');
        // tv.fillCircle(props.pos.x, props.pos.y, 0.2, 'green'); // upper-left
        // tv.fillCircle(props.pos.x, props.pos.y, 0.02, 'black'); // upper-left
        // tv.fillCircle(props.pos.x + 1, props.pos.y, 0.2, 'green'); // upper-right
        // tv.fillCircle(props.pos.x + 1, props.pos.y, 0.02, 'black'); // upper-right
        // tv.fillCircle(props.pos.x, props.pos.y + 1, 0.2, 'green'); // lower-left
        // tv.fillCircle(props.pos.x, props.pos.y + 1, 0.02, 'black'); // lower-left
        // tv.fillCircle(props.pos.x + 1, props.pos.y + 1, 0.2, 'green'); // lower-right
        // tv.fillCircle(props.pos.x + 1, props.pos.y + 1, 0.02, 'black'); // lower-right
        tv.strokeRect(props.pos.x, props.pos.y, 1, 1, 'white');
    };

    const input = (key: InputKey) => {
        console.log('input: ' + key);
        if (key === 'release') {
            props.move = 'none';
            props.vel.x = 0;
            props.vel.y = 0;
            return;
        }
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

    return { update, show };
};
