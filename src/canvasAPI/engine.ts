import type { Engine } from '../tr/types/index.';

const updateList: Array<() => void> = [];
const showList: Array<() => void> = [];

let requestID: number;
let stop = false;

let engine: Engine;

export const getEngine = () => engine;

export const setEngine = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const addUpdate = (update: () => void) => updateList.push(update);
    const addShow = (show: () => void) => showList.push(show);
    const run = () => loop();
    const abort = () => (stop = true);
    const runOnce = () => {
        stop = true;
        loop();
    };

    const loop = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Collision and Resolve list?
        for (const update of updateList) update();
        for (const show of showList) show();

        requestID = requestAnimationFrame(loop);

        if (stop) {
            cancelAnimationFrame(requestID);
            stop = false;
        }
    };

    engine = { addUpdate, addShow, run, abort, runOnce };
};
