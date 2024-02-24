// import { block } from './levels/blocks';
import { controller, level, player } from './store';
import { Player } from './types/index.';

export const setPlayer = () => {
    const { x, y } = level.state.start;

    const rawPlayer: Player = {
        pos: { x, y },
        absPos: { x, y },
        vel: { x: 0, y: 0 },
        speed: 0.3,
        move: 'none',
        face: 'up',
        stop: () => {},
        update: () => {},
        show: () => {},
    };

    rawPlayer.stop = () => {
        rawPlayer.vel.x = 0;
        rawPlayer.vel.y = 0;
        rawPlayer.move = 'none';
    };

    const input = ({ key }: KeyboardEvent) => {
        if (rawPlayer.move !== 'none') return;

        if (key === 'w' || key === 'W') {
            rawPlayer.move = 'up';
            rawPlayer.vel.y = -rawPlayer.speed;
        }
        if (key === 's' || key === 'S') {
            rawPlayer.move = 'down';
            rawPlayer.vel.y = rawPlayer.speed;
        }
        if (key === 'a' || key === 'A') {
            rawPlayer.move = 'left';
            rawPlayer.vel.x = -rawPlayer.speed;
        }
        if (key === 'd' || key === 'D') {
            rawPlayer.move = 'right';
            rawPlayer.vel.x = rawPlayer.speed;
        }
    };

    window.addEventListener('keydown', input, false);

    // Developer method only
    window.addEventListener('keyup', () => rawPlayer.stop());

    const update = () => {
        rawPlayer.pos.x += rawPlayer.vel.x;
        rawPlayer.pos.y += rawPlayer.vel.y;
        rawPlayer.absPos.x = Math.floor(rawPlayer.pos.x);
        rawPlayer.absPos.y = Math.floor(rawPlayer.pos.y);

        // if (rawPlayer.move !== 'none') direction[rawPlayer.move]();
    };

    const show = () => {
        controller.state.tv.fillRect(
            rawPlayer.pos.x,
            rawPlayer.pos.y,
            1,
            1,
            'blue'
        );
        controller.state.tv.strokeRect(
            rawPlayer.pos.x,
            rawPlayer.pos.y,
            1,
            1,
            'white'
        );
    };

    rawPlayer.update = update;
    rawPlayer.show = show;

    player.set(rawPlayer);
};
