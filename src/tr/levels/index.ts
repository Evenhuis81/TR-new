import { controllerStore, levelStore } from '../store';
import type { Level } from '../types/index.';

type Block = ReturnType<(typeof blocks)['X']>;

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
        show: () => {},
    },
];

const blocks = {
    X: (x: number, y: number) => {
        return {
            show: () => {
                controllerStore.state.tv.fillRect(x, y, 1, 1, 'red');
            },
        };
    },
    '.': (x: number, y: number) => {
        return {
            show: () => {
                controllerStore.state.tv.strokeRect(x, y, 1, 1, 'purple');
            },
        };
    },
};

export const setLevel = (id: number) => {
    const level = levels[id - 1];

    const map: Array<Array<Block>> = [];

    for (let y = 0; y < level.map.length; y++) {
        map.push([]);
        for (let x = 0; x < level.map[y].length; x++) {
            switch (level.map[y][x]) {
                case 'X':
                    map[y].push(blocks['X'](x, y));
                    break;
                case '.':
                    map[y].push(blocks['.'](x, y));
                    break;
                default:
                    break;
            }
        }
    }

    level.show = () => {
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                map[y][x].show();
            }
        }
    };

    levelStore.set(level);
};
