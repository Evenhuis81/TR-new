const updateList: Array<Function> = [];
const showList: Array<Function> = [];

const engine = {
    requestID: 0,
    stop: false,
};

export const getEngine = () => {
    let frameCounter = 0;

    const addUpdate = (update: Function) => updateList.push(update);
    const addShow = (show: Function) => showList.push(show);
    const run = () => loop();
    const abort = () => (engine.stop = true);
    const runOnce = () => {
        engine.stop = true;
        loop();
    };
    const frameCount = () => frameCounter;

    const loop = () => {
        frameCounter++;

        for (const update of updateList) update();
        for (const show of showList) show();

        engine.requestID = requestAnimationFrame(loop);

        if (engine.stop) {
            cancelAnimationFrame(engine.requestID);
            engine.stop = false;
        }
    };

    return {
        addUpdate,
        addShow,
        run,
        abort,
        runOnce,
        frameCount,
    };
};
