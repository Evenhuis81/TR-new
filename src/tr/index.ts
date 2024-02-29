import { controllerStore, levelStore, playerStore } from './store';

export const setUpdates = () => {
    controllerStore.state.engine.addUpdate(playerStore.state.update);
};

export const setDraw = () => {
    // const blockShowList = levelStore.state.getBlockDrawList();

    controllerStore.state.engine.addShow(levelStore.state.show);

    controllerStore.state.engine.addShow(playerStore.state.show);
};

export const start = () => {
    controllerStore.state.engine.run();
};
