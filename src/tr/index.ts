import { controllerStore, levelStore, playerStore } from './store';

export const setUpdates = () => {
    const { engine, tv } = controllerStore.state;

    // Fade in through zoom
    let scale = { x: 0, y: 0 };

    const zoomIn = () => {
        scale.x += 0.1;
        scale.y += 0.1;

        tv.setScale(scale);
    };

    engine.addUpdate(zoomIn);

    engine.addUpdate(playerStore.state.update);
};

export const setDraw = () => {
    const { context, canvas, engine } = controllerStore.state;

    const clear = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    engine.addShow(clear);

    engine.addShow(levelStore.state.show);

    engine.addShow(playerStore.state.show);
};

export const start = () => {
    controllerStore.state.engine.run();
};
