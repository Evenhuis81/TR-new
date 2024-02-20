import { setPlayer } from './controller';
import { block } from './levels/blocks';
import { Controller, Level, Player } from './types/index.';

export const getPlayer = (level: Level, { tv }: Controller) => {
    const player: Player = {
        pos: { x: level.start.x, y: level.start.y },
        absPos: { x: level.start.x, y: level.start.y },
        vel: { x: 0, y: 0 },
        speed: 0.5,
        move: 'none',
        face: 'up',
        stop: () => {},
    };

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
    // window.addEventListener('keyup', () => {
    //     player.move = 'none';
    //     player.vel.x = 0;
    //     player.vel.y = 0;
    // });

    const direction: Record<string, () => void> = {
        up: () => {
            const blockUp = level.map[player.absPos.y][player.absPos.x];
            block[blockUp][player.move](player);
        },
        down: () => {
            const blockDown = level.map[player.absPos.y + 1][player.absPos.x];
            block[blockDown][player.move](player);
        },
        left: () => {
            const blockLeft = level.map[player.absPos.y][player.absPos.x];
            block[blockLeft][player.move](player);
        },
        right: () => {
            const blockRight = level.map[player.absPos.y][player.absPos.x + 1];
            block[blockRight][player.move](player);
        },
    };

    const update = () => {
        player.pos.x += player.vel.x;
        player.pos.y += player.vel.y;
        player.absPos.x = Math.floor(player.pos.x);
        player.absPos.y = Math.floor(player.pos.y);

        if (player.move !== 'none') direction[player.move]();
    };

    const show = () => {
        tv.fillRect(player.pos.x, player.pos.y, 1, 1, 'blue');
        tv.strokeRect(player.pos.x, player.pos.y, 1, 1, 'white');
    };

    setPlayer(player);

    return { update, show };
};
