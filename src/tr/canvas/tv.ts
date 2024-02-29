import { GetTV, Rect } from '../types/index.';

export const getTV: GetTV = (scaleInput: number) => {
    const scale = { x: scaleInput, y: scaleInput };

    const world2Screen = (rect: Rect) => ({
        x: rect.x * scale.x,
        y: rect.y * scale.y,
        w: rect.w * scale.x,
        h: rect.h * scale.y,
    });

    return { world2Screen };
};
