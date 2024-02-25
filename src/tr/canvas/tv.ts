import { DrawObject } from './engine';

let c: CanvasRenderingContext2D;

const scale = 20;

const fillRect = ({ color, x, y, w, h }: DrawObject) => {
    c.fillStyle = color;
    c.beginPath();
    c.fillRect(x * scale, y * scale, w * scale, h * scale);
};

const strokeRect = ({ color, x, y, w, h }: DrawObject) => {
    c.strokeStyle = color;
    c.beginPath();
    c.strokeRect(x * scale, y * scale, w * scale, h * scale);
};

const fillCircle = ({ color, x, y, r }: DrawObject) => {
    c.fillStyle = color;
    c.beginPath();
    c.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2);
};

export const setTV = (context: CanvasRenderingContext2D) => {
    c = context;
};

export const getPaint = () => {
    return { fillRect, strokeRect, fillCircle };
};
