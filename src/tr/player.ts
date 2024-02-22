// import { block } from './levels/blocks';
// import { Player } from './types/index.';

import { TransformedView } from './types/index.';

export const getPlayer = (x: number, y: number, tv: TransformedView) => {
    const player = {
        pos: { x, y },
        absPos: { x, y },
        vel: { x: 0, y: 0 },
        speed: 0.5,
        move: 'none',
        face: 'up',
        stop: () => {},
        update: () => {},
        show: () => {},
    };

    // Development method
    player.stop = () => {
        player.vel.x = 0;
        player.vel.y = 0;
        player.move = 'none';
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
    // window.addEventListener('keyup', () => {
    //     player.move = 'none';
    //     player.vel.x = 0;
    //     player.vel.y = 0;
    // });

    const update = () => {
        player.pos.x += player.vel.x;
        player.pos.y += player.vel.y;
        player.absPos.x = Math.floor(player.pos.x);
        player.absPos.y = Math.floor(player.pos.y);

        // if (player.move !== 'none') direction[player.move]();
    };

    const show = () => {
        tv.fillRect(player.pos.x, player.pos.y, 1, 1, 'blue');
        tv.strokeRect(player.pos.x, player.pos.y, 1, 1, 'white');
    };

    player.update = update;
    player.show = show;

    return { update, show };
};
