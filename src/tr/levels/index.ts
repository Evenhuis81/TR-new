import { controllerStore, levelStore } from '../store';
import type { MapType } from '../types/index.';

const map: Array<Array<MapType>> = [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '.', '.', '.', '.', '.', '.', '.', 'X', 'X'],
    ['X', '.', '.', '.', '.', '.', '.', '.', '.', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X'],
    ['X', '.', '.', '.', '.', '.', '.', '.', '.', 'X'],
    ['X', '.', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '.', '.', '.', '.', '.', '.', '.', '.', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X'],
    ['X', '.', '.', '.', '.', '.', '.', '.', '.', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
];

export const setLevel = () => {
    const { context } = controllerStore.state;

    const show = () => {
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                switch (map[y][x]) {
                    case '.':
                        //
                        break;
                    case 'X':
                        context.fillStyle = 'red';
                        context.beginPath();
                        context.fillRect(x * 40, y * 40, 40, 40);
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
