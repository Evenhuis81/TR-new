import { controllerStore, playerStore, levelStore } from './store';

export const setUpdates = () => {
    controllerStore.state.engine.addUpdate(playerStore.state.update);
};

export const setCollisions = () => {
    //
};

export const setShows = () => {
    controllerStore.state.engine.addShow(levelStore.state.show);
    // controllerStore.state.engine.addShow(playerStore.state.show);
};

export const run = () => {
    controllerStore.state.engine.run();
};
