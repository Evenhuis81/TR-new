const updateList: Array<() => void> = [];
const showList: Array<() => void> = [];

let requestID: number;
let stop = false;

export const getEngine = () => {
    const addUpdate = (update: () => void) => updateList.push(update);
    const addShow = (show: () => void) => showList.push(show);
    const run = () => loop();
    const abort = () => (stop = true);
    const runOnce = () => {
        stop = true;
        loop();
    };

    const loop = () => {
        // Collision and Resolve list?
        for (const update of updateList) update();
        for (const show of showList) show();

        requestID = requestAnimationFrame(loop);

        if (stop) {
            cancelAnimationFrame(requestID);
            stop = false;
        }
    };

    return { addUpdate, addShow, run, abort, runOnce };
};
