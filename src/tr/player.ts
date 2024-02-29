import { levelStore, playerStore, controllerStore } from './store';
import { Player } from './types/index.';

export const setPlayer = () => {
    const { x, y } = levelStore.state.start;
    const { context } = controllerStore.state;

    const player: Player = {
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

    player.show = () => {
        const { x, y, w, h } = controllerStore.state.tv.world2Screen({
            x: player.pos.x,
            y: player.pos.y,
            w: 1,
            h: 1,
        });
        context.fillStyle = 'blue';
        context.beginPath();
        context.fillRect(x, y, w, h);
    };

    const direction = {
        up: () => {
            const mapUp =
                levelStore.state.map[player.absPos.y][player.absPos.x];
            if (mapUp === 'X') {
                player.stop();
                player.pos.y = player.absPos.y + 1;
            } else if (mapUp === ',') {
                levelStore.state.map[player.absPos.y][player.absPos.x] = '.';
            }
        },
        down: () => {
            const mapDown =
                levelStore.state.map[player.absPos.y + 1][player.absPos.x];
            if (mapDown === 'X') {
                player.stop();
                player.pos.y = player.absPos.y;
            } else if (mapDown === ',') {
                levelStore.state.map[player.absPos.y + 1][player.absPos.x] =
                    '.';
            }
        },
        left: () => {
            const mapLeft =
                levelStore.state.map[player.absPos.y][player.absPos.x];
            if (mapLeft === 'X') {
                player.stop();
                player.pos.x = player.absPos.x + 1;
            } else if (mapLeft === ',') {
                levelStore.state.map[player.absPos.y][player.absPos.x] = '.';
            }
        },
        right: () => {
            const mapRight =
                levelStore.state.map[player.absPos.y][player.absPos.x + 1];
            if (mapRight === 'X') {
                player.stop();
                player.pos.x = player.absPos.x;
            } else if (mapRight === ',') {
                levelStore.state.map[player.absPos.y][player.absPos.x + 1] =
                    '.';
            }
        },
    };

    player.update = () => {
        player.pos.x += player.vel.x;
        player.pos.y += player.vel.y;
        player.absPos.x = Math.floor(player.pos.x);
        player.absPos.y = Math.floor(player.pos.y);

        // collision/resolve
        if (player.move !== 'none') direction[player.move]();
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
    // window.addEventListener('keyup', () => player.stop());
    player.stop = () => {
        player.vel.x = 0;
        player.vel.y = 0;
        player.move = 'none';
    };

    playerStore.set(player);
};
