import { getTV } from '../canvasAPI/tv';
import { getLevel } from './levels';
// import { block } from './levels/blocks';
import { Player } from './types/index.';

const level = getLevel();
const tv = getTV();
let player: Player;

export const getPlayer = () => player;

export const setPlayer = () => {
    player = {
        pos: { x: level.start.x, y: level.start.y },
        absPos: { x: level.start.x, y: level.start.y },
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

    // const direction: Record<string, () => void> = {
    //     up: () => {
    //         const blockUp = level.map[player.absPos.y][player.absPos.x];
    //         block[blockUp][player.move]();
    //     },
    //     down: () => {
    //         const blockDown = level.map[player.absPos.y + 1][player.absPos.x];
    //         block[blockDown][player.move]();
    //     },
    //     left: () => {
    //         const blockLeft = level.map[player.absPos.y][player.absPos.x];
    //         block[blockLeft][player.move]();
    //     },
    //     right: () => {
    //         const blockRight = level.map[player.absPos.y][player.absPos.x + 1];
    //         block[blockRight][player.move]();
    //     },
    // };

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
};
