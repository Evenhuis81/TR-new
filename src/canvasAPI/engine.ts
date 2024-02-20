const updateList: Array<() => void> = [];
const showList: Array<() => void> = [];

let cvs: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let requestID: number;
let stop = false;

export const getEngine = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    cvs = canvas;
    ctx = context;

    const addUpdate = (update: () => void) => updateList.push(update);
    const addShow = (show: () => void) => showList.push(show);
    const run = () => loop();
    const abort = () => (stop = true);
    const runOnce = () => {
        stop = true;
        loop();
    };

    return { addUpdate, addShow, run, abort, runOnce };
};

const loop = () => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    // Collision and Resolve list ?
    for (const update of updateList) update();
    for (const show of showList) show();

    requestID = requestAnimationFrame(loop);

    if (stop) {
        cancelAnimationFrame(requestID);
        stop = false;
    }
};
