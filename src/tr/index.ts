import { controllerStore, levelStore, playerStore } from './store';

export const setUpdates = () => {
    controllerStore.state.engine.addUpdate(playerStore.state.update);
};

export const setCollisions = () => {
    //
};

export const setDrawList = () => {
    const blockList = levelStore.state.getBlockList();

    blockList.forEach((block) =>
        controllerStore.state.engine.addDraw(block.draw)
    );

    controllerStore.state.engine.addDraw(playerStore.state.draw);
};

export const start = () => {
    controllerStore.state.engine.run();
};
