const updateList: Array<Function> = [];
const showList: Array<Function> = [];

let requestID: number;
let stop = false;

export const getEngine = () => {
    const addUpdate = (update: Function) => updateList.push(update);
    const addShow = (show: Function) => showList.push(show);
    const run = () => loop();
    const abort = () => (stop = true);
    const runOnce = () => {
        stop = true;
        loop();
    };

    const loop = () => {
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
