import { Level, TransformedView } from '../types/index.';

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

export const getLevel = (id: number, tv: TransformedView) => {
    const level = levels[id - 1];

    const show = () => {
        for (let y = 0; y < level.map.length; y++) {
            for (let x = 0; x < level.map[y].length; x++) {
                switch (level.map[y][x]) {
                    case 'X':
                        tv.fillRect(x, y, 1, 1, 'red');
                        break;
                    case '.':
                        tv.strokeRect(x, y, 1, 1, 'purple');
                        break;
                    default:
                        break;
                }
            }
        }
    };

    level.show = show;

    return level;
};
