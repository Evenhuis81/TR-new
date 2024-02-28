import { levelStore, playerStore } from './store';
import { Player } from './types/index.';

export const setPlayer = () => {
    const { x, y } = levelStore.state.start;

    const player: Player = {
        pos: { x, y },
        absPos: { x, y },
        vel: { x: 0, y: 0 },
        speed: 0.1,
        move: 'none',
        face: 'up',
        stop: () => {},
        update: () => {},
        draw: {
            type: 'fillRect',
            fillRect: {
                color: 'blue',
                x,
                y,
                w: 1,
                h: 1,
            },
        },
    };

    player.stop = () => {
        player.vel.x = 0;
        player.vel.y = 0;
        player.move = 'none';
    };

    const direction = {
        'up' : ,
        'down' : ,
        'left' : ,
        'right' : ,
    }

    player.update = () => {
        player.pos.x += player.vel.x;
        player.pos.y += player.vel.y;
        player.absPos.x = Math.floor(player.pos.x);
        player.absPos.y = Math.floor(player.pos.y);

        // collision
        if (player.move !== 'none') direction[player.move]();
        // resolve
    };

    const input = ({ key }: KeyboardEvent) => {
        if (player.move !== 'none') return;

        if (key === 'w' || key === 'W') {
            player.move = 'up';
            player.vel.y = -player.speed;
        }
        if (key === 's' || key === 'S') {
            player.move = 'down';
            player.vel.y = player.speed;
        }
        if (key === 'a' || key === 'A') {
            player.move = 'left';
            player.vel.x = -player.speed;
        }
        if (key === 'd' || key === 'D') {
            player.move = 'right';
            player.vel.x = player.speed;
        }
    };

    window.addEventListener('keydown', input, false);

    // Developer method only
    window.addEventListener('keyup', () => player.stop());

    playerStore.set(player);
};
