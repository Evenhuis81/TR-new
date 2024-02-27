import type {
    DrawObject,
    FillCircle,
    FillRect,
    StrokeRect,
} from '../types/index.';

let c: CanvasRenderingContext2D;

const scale = 20;

const fillRect = ({ color, x, y, w, h }: FillRect) => {
    c.fillStyle = color;
    c.beginPath();
    c.fillRect(x * scale, y * scale, w * scale, h * scale);
};

const strokeRect = ({ color, x, y, w, h }: StrokeRect) => {
    c.strokeStyle = color;
    c.beginPath();
    c.strokeRect(x * scale, y * scale, w * scale, h * scale);
};

const fillCircle = ({ color, x, y, r }: FillCircle) => {
    c.fillStyle = color;
    c.beginPath();
    c.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2);
};

export const setTV = (context: CanvasRenderingContext2D) => {
    c = context;
};

export const getPaint = (draw: DrawObject) => {
    switch (draw.type) {
        case 'fillRect':
            fillRect(draw.fillRect);
            break;
        case 'strokeRect':
            strokeRect(draw.strokeRect);
            break;
        case 'fillCircle':
            fillCircle(draw.fillCircle);
            break;
        default:
            break;
    }
};
