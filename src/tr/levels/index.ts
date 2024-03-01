import { controllerStore, levelStore } from '../store';
import type { MapType } from '../types/index.';

// Legend:
// '.': empty
// 'X': solid
// ',': small coin
// 'I': cannon up
// 'K': cannon down
// 'J': cannon left
// 'L': cannon right

const map: Array<Array<MapType>> = [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['L', '.', ',', ',', ',', ',', '.', '.', 'X', 'X'],
    ['X', ',', '.', '.', '.', '.', '.', '.', '.', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', ',', 'X'],
    ['X', '.', '.', '.', '.', '.', '.', '.', '.', 'X'],
    ['X', ',', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', ',', '.', '.', '.', '.', '.', '.', '.', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X'],
    ['X', ',', '.', '.', '.', '.', '.', '.', ',', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
];

export const setLevel = () => {
    const { context: c, tv } = controllerStore.state;

    const show = () => {
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                switch (map[y][x]) {
                    case '.':
                        break;
                    case ',':
                        const circle = tv.world2ScreenCircle({
                            x: x + 0.5,
                            y: y + 0.5,
                            r: 0.2,
                        });
                        c.fillStyle = 'yellow';
                        c.beginPath();
                        c.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
                        c.fill();
                        break;
                    case 'X':
                        const rect = tv.world2ScreenRect({ x, y, w: 1, h: 1 });
                        c.fillStyle = 'red';
                        c.beginPath();
                        c.fillRect(rect.x, rect.y, rect.w, rect.h);
                        break;
                    case 'L': // cannon right
                        const rect2 = tv.world2ScreenRect({ x, y, w: 1, h: 1 });
                        c.fillStyle = 'green';
                        c.beginPath();
                        c.fillRect(rect2.x, rect2.y, rect2.w, rect2.h);
                        break;
                    default:
                        break;
                }
            }
        }
    };

    const lBlock = {
        x: 0,
        y: 0,
        update: () => {
            //
        },
        show: () => {
            //
        },
    };

    const blocks = [];

    const setBlock = () => {
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                switch (map[y][x]) {
                    case 'L':
                        blocks.push();
                        break;

                    default:
                        break;
                }
            }
        }
    };

    levelStore.set({
        start: { x: 2, y: 4 },
        face: 'up',
        map,
        show,
    });
};

// const blocks: Array<Array<BlockType>> = [];

// Convert map elements into blocks
// for (let y = 0; y < map.length; y++) {
//     blocks.push([]);
//     for (let x = 0; x < map[y].length; x++) {
//         blocks[y].push(createBlock[map[y][x]]());
//     }
// }

// const getBlockDrawList = () => {
//     const drawList = [];
//     for (let y = 0; y < blocks.length; y++) {
//         for (let x = 0; x < blocks[y].length; x++) {
//             drawList.push(blocks[y][x].draw);
//         }
//     }
//     return drawList;
// };

// const createBlock: Record<MapType, (x: number, y: number) => BlockType> = {
//     X: (x: number, y: number) => {
//         return {
//             collideUp: (player: Player) => {
//                 player.pos.y = player.absPos.y + 1;
//             },
//             collideDown: (player: Player) => {
//                 player.pos.y = player.absPos.y;
//             },
//             collideLeft: (player: Player) => {
//                 player.pos.x = player.absPos.x + 1;
//             },
//             collideRight: (player: Player) => {
//                 player.pos.x = player.absPos.x;
//             },
//             type: 'solid',
//         };
//     },
//     '.': (x: number, y: number) => {
//         return {
//             collideUp: (player: Player) => {
//                 // player.pos.y = player.absPos.y + 1;
//             },
//             collideDown: (player: Player) => {
//                 // player.pos.y = player.absPos.y;
//             },
//             collideLeft: (player: Player) => {
//                 // player.pos.x = player.absPos.x + 1;
//             },
//             collideRight: (player: Player) => {
//                 // player.pos.x = player.absPos.x;
//             },
//             type: 'empty',

//         };
//     },
// };
