import { getEngine } from './canvas/engine';
import { getTV } from './canvas/tv';
import type { Options } from './types/index.';

const e = {
    msg1: (id: string) => `canvas with id: ${id} not found.`,
    msg2: 'Unable to get 2DContext from canvas',
};

export const getController = (
    container: HTMLElement | null,
    options: Options
) => {
    if (!(container instanceof HTMLDivElement))
        throw Error('provided container is not a HTMLDivElement');

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!(context instanceof CanvasRenderingContext2D)) throw Error(e.msg2);

    setOptions(container, canvas, options);

    const tv = getTV(context);

    const engine = getEngine();

    return { canvas, context, tv, engine };
};

const setOptions = (
    container: HTMLDivElement,
    canvas: HTMLCanvasElement,
    options: Options
) => {
    if (options.pos === 'center') {
        container.style.backgroundColor = options.bg;
        container.style.display = 'flex';
        container.style.height = '100vh';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
    }

    canvas.width = options.w;
    canvas.height = options.h;
    canvas.style.border = '1px solid white';

    container.appendChild(canvas);

    // if (clear) ...
};
