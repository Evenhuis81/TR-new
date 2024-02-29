import { controllerStore, levelStore, playerStore } from './store';

export const setUpdates = () => {
    controllerStore.state.engine.addUpdate(playerStore.state.update);
};

export const setDraw = () => {
    const clear = () => {
        controllerStore.state.context.clearRect(
            0,
            0,
            controllerStore.state.canvas.width,
            controllerStore.state.canvas.height
        );
    };

    controllerStore.state.engine.addShow(clear);

    controllerStore.state.engine.addShow(levelStore.state.show);

    controllerStore.state.engine.addShow(playerStore.state.show);
};

export const start = () => {
    controllerStore.state.engine.run();
};
