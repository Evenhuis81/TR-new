import { controllerStore, playerStore, levelStore } from './store';

export const setUpdates = () => {
    controllerStore.state.engine.addUpdate(playerStore.state.update);
};

export const setCollisions = () => {
    //
};

export const setDrawList = () => {
    // controllerStore.state.engine.addDraw(levelStore.state.show);
    controllerStore.state.engine.addDraw(playerStore.state.draw);
    // controllerStore.state.engine.addDraw
};

export const run = () => {
    controllerStore.state.engine.run();
};
