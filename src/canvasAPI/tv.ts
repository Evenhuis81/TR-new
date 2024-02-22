// import type { TransformedView } from '../tr/types/index.';

// let tv: TransformedView;
const scale = 20;

// export const getTV = () => tv;

export const getTV = (ctx: CanvasRenderingContext2D) => {
    const fillRect = (
        x: number,
        y: number,
        w: number,
        h: number,
        color: string
    ) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect(x * scale, y * scale, w * scale, h * scale);
    };
    const strokeRect = (
        x: number,
        y: number,
        w: number,
        h: number,
        color: string
    ) => {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.strokeRect(x * scale, y * scale, w * scale, h * scale);
    };
    const fillCircle = (x: number, y: number, r: number, color: string) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2);
        ctx.fill();
    };

    return { fillRect, strokeRect, fillCircle };
};
