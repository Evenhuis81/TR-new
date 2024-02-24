import { controller, level } from '../store';
import type { Level } from '../types/index.';

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
        // coinsX: [],
        // coinsY: [],
    },
];

export const setLevel = (id: number) => {
    const rawLevel = levels[id - 1];

    // Coin test
    // rawLevel.coinsX[5] = true;
    // rawLevel.coinsY[1] = true;

    const show = () => {
        for (let y = 0; y < rawLevel.map.length; y++) {
            for (let x = 0; x < rawLevel.map[y].length; x++) {
                switch (rawLevel.map[y][x]) {
                    case 'X':
                        controller.state.tv.fillRect(x, y, 1, 1, 'red');
                        break;
                    case '.':
                        controller.state.tv.strokeRect(x, y, 1, 1, 'purple');

                        // if (rawLevel.coinsX[x] && rawLevel.coinsY[y])
                        //     tv.fillCircle(x + 0.5, y + 0.5, 0.2, 'yellow');
                        break;
                    default:
                        break;
                }
            }
        }
    };

    rawLevel.show = show;

    level.set(rawLevel);
};
