import { levelStore } from '../store';
import type { Level, MapType, BlockType } from '../types/index.';

const levels: Array<Level> = [
    {
        start: { x: 2, y: 4 },
        face: 'up',
        map: [
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
        ],
        blocks: [],
        getBlockDrawList: () => [],
    },
];

const createBlock: Record<MapType, (x: number, y: number) => BlockType> = {
    X: (x: number, y: number) => {
        return {
            draw: {
                type: 'fillRect',
                color: 'red',
                x,
                y,
                w: 1,
                h: 1,
                r: 0,
            },
        };
    },
    '.': (x: number, y: number) => {
        return {
            draw: {
                type: 'strokeRect',
                color: 'red',
                x,
                y,
                w: 1,
                h: 1,
                r: 0,
            },
        };
    },
};

export const setLevel = (id: number) => {
    const level = levels[id - 1];

    // Convert map elements into blocks
    for (let y = 0; y < level.map.length; y++) {
        level.blocks.push([]);
        for (let x = 0; x < level.map[y].length; x++) {
            level.blocks[y].push(createBlock[level.map[y][x]](x, y));
        }
    }

    const getBlockDrawList = () => {
        const blocksDrawList = [];

        for (let y = 0; y < level.blocks.length; y++) {
            // blocksDrawList.push([]);
            for (let x = 0; x < level.blocks[y].length; x++) {
                blocksDrawList.push(level.blocks[y][x]);
            }
        }

        return blocksDrawList;
    };

    level.getBlockDrawList = getBlockDrawList;

    levelStore.set(level);
};
