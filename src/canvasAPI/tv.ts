const tvScale = 20;

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
        ctx.fillRect(x * tvScale, y * tvScale, w * tvScale, h * tvScale);
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
        ctx.strokeRect(x * tvScale, y * tvScale, w * tvScale, h * tvScale);
    };
    const rect = (x: number, y: number, w: number, h: number) => {
        ctx.rect(x * tvScale, y * tvScale, w * tvScale, h * tvScale);
    };
    const fillCircle = (x: number, y: number, r: number, color: string) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x * tvScale, y * tvScale, r * tvScale, 0, Math.PI * 2);
        ctx.fill();
    };

    return { fillRect, strokeRect, rect, fillCircle };
};
