import { getTV } from '../../canvasAPI/tv';
import type { Level } from '../types/index.';

let level: Level;

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
        coinsX: [],
        coinsY: [],
    },
];

export const getLevel = () => level;

export const setLevel = (id: number) => {
    level = levels[id - 1];
    const tv = getTV();

    // Coin test
    level.coinsX[5] = true;
    level.coinsY[1] = true;

    const show = () => {
        for (let y = 0; y < level.map.length; y++) {
            for (let x = 0; x < level.map[y].length; x++) {
                switch (level.map[y][x]) {
                    case 'X':
                        tv.fillRect(x, y, 1, 1, 'red');
                        break;
                    case '.':
                        tv.strokeRect(x, y, 1, 1, 'purple');

                        if (level.coinsX[x] && level.coinsY[y])
                            tv.fillCircle(x + 0.5, y + 0.5, 0.2, 'yellow');
                        break;
                    default:
                        break;
                }
            }
        }
    };
    level.show = show;
};
