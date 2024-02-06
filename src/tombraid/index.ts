export const get2D = (id: string) => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    return {canvas, context};
}