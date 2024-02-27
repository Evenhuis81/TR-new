import { DrawObject } from '../types/index.';
import { getPaint } from './tv';

const paint = getPaint();

const updateList: Array<() => void> = [];
const drawList: Array<DrawObject> = [];

let requestID: number;
let stop = false;

export const getEngine = () => {
    const addUpdate = (update: () => void) => updateList.push(update);
    const addDraw = (draw: DrawObject) => drawList.push(draw);
    const run = () => loop();
    const abort = () => (stop = true);
    const runOnce = () => {
        stop = true;
        loop();
    };

    const loop = () => {
        for (const update of updateList) update();
        for (const draw of drawList) paint[draw.type](draw);

        requestID = requestAnimationFrame(loop);

        if (stop) {
            cancelAnimationFrame(requestID);
            stop = false;
        }
    };

    return { addUpdate, addDraw, run, abort, runOnce };
};
