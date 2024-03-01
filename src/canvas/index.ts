export type CanvasOptions = {
    pos?: string;
    w: number;
    h: number;
    bg?: string;
    border?: string;
};

const e = {
    msg1: (id: string) => `canvas with id: ${id} not found.`,
    msg2: 'Unable to get 2DContext from canvas',
};

export const getContext = (
    container: HTMLElement | null,
    options: CanvasOptions
) => {
    if (!(container instanceof HTMLDivElement))
        throw Error('provided container is not a HTMLDivElement');

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!(context instanceof CanvasRenderingContext2D)) throw Error(e.msg2);

    setOptions(container, canvas, options);

    return { canvas, context };
};

const setOptions = (
    container: HTMLDivElement,
    canvas: HTMLCanvasElement,
    options: CanvasOptions
) => {
    if (options.pos === 'center') {
        container.style.display = 'flex';
        container.style.height = '100vh';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
    }

    if (options.bg) canvas.style.backgroundColor = options.bg;
    if (options.border) canvas.style.border = options.border;

    canvas.width = options.w;
    canvas.height = options.h;

    container.appendChild(canvas);
};
