import { CanvasOptions, getContext } from '../canvas';
import { getEngine } from '../canvas/engine';
import { getTV } from '../canvas/tv';
import { controllerStore } from './store';

export const setController = (
    container: HTMLElement | null,
    options: CanvasOptions
) => {
    const { canvas, context } = getContext(container, options);

    const tv = getTV();

    // tv.setScale({ x: 20, y: 20 });

    const engine = getEngine();

    controllerStore.set({ canvas, context, tv, engine });
};
