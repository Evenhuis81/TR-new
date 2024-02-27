import { controllerStore, levelStore, playerStore } from './store';

const { addUpdate, addDraw, run } = controllerStore.state.engine;

export const setUpdates = () => {
    addUpdate(playerStore.state.update);
};

export const setCollisions = () => {
    //
};

export const setDrawList = () => {
    const blockList = levelStore.state.getBlockList();

    blockList.forEach((block) => addDraw(block.draw));

    addDraw(playerStore.state.draw);
};

export const start = () => {
    run();
};
