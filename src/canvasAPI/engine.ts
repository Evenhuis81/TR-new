const updateList: Array<() => void> = [];
const collisionList: Array<() => void> = [];
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
    const addCollision = (collision: () => void) =>
        collisionList.push(collision);
    const addShow = (show: () => void) => showList.push(show);
    const run = () => loop();
    const abort = () => (stop = true);
    const runOnce = () => {
        stop = true;
        loop();
    };

    return { addUpdate, addCollision, addShow, run, abort, runOnce };
};

const loop = () => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    for (const update of updateList) update();
    for (const collision of collisionList) collision();
    // for (const resolve of resolveList) resolve();
    for (const show of showList) show();

    requestID = requestAnimationFrame(loop);

    if (stop) {
        cancelAnimationFrame(requestID);
        stop = false;
    }
};
