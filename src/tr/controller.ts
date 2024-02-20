import { setEngine } from '../canvasAPI/engine';
import { setTV } from '../canvasAPI/tv';
import type { Options } from './types/index.';

const e = {
    msg1: (id: string) => `canvas with id: ${id} not found.`,
    msg2: 'Unable to get 2DContext from canvas',
};

export const controller = {
    canvas: null as unknown as HTMLCanvasElement,
    context: null as unknown as CanvasRenderingContext2D,
    // tv: null as unknown as TransformedView,
    // engine: null as unknown as Engine,
};

export const setController = (
    container: HTMLElement | null,
    options: Options
) => {
    if (!(container instanceof HTMLDivElement))
        throw Error('provided container is not a HTMLDivElement');

    controller.canvas = document.createElement('canvas');
    const context = controller.canvas.getContext('2d');

    if (!(context instanceof CanvasRenderingContext2D)) throw Error(e.msg2);
    controller.context = context;

    setOptions(container, controller.canvas, options);

    setTV(context);

    // controller.tv = getTV();

    setEngine(controller.canvas, context);

    // controller.engine = getEngine();
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
};
