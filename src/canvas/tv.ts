import { Circle, GetTV, Rect } from '../tr/types/index.';

const offSet = { x: 320, y: 240 };

export const getTV: GetTV = () => {
    const scale = { x: 0, y: 0 };

    const world2ScreenRect = (rect: Rect) => ({
        x: (rect.x - offSet.x) * scale.x,
        y: (rect.y - offSet.y) * scale.y,
        w: rect.w * scale.x,
        h: rect.h * scale.y,
    });

    const world2ScreenCircle = (circle: Circle) => ({
        x: (circle.x - offSet.x) * scale.x,
        y: (circle.y - offSet.y) * scale.y,
        r: circle.r * scale.x, // circle, thus taking either x or y
    });

    const setScale = (scaleInput: { x: number; y: number }) => {
        scale.x = scaleInput.x;
        scale.y = scaleInput.y;
    };

    return { world2ScreenRect, world2ScreenCircle, setScale };
};
