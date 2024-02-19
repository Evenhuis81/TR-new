export type Player = {
    update: () => void;
    show: () => void;
    // input: () => void;
    // pos: { x: number; y: number };
    // move: 'none' | 'up' | 'down' | 'left' | 'right';
};

export type Options = {
    pos: string;
    w: number;
    h: number;
    bg: string;
};

export type InputKey = 'w' | 's' | 'a' | 'd' | 'W' | 'S' | 'A' | 'D';

export type PlayerProperties = {
    pos: { x: number; y: number };
    absPos: { x: number; y: number };
    vel: { x: number; y: number };
    speed: number;
    move: 'none' | 'up' | 'down' | 'left' | 'right';
    face: 'up' | 'down' | 'left' | 'right';
    stop: () => void;
};

type BlockKey = 'X' | '.';

export type Level = {
    start: { x: number; y: number };
    face: 'none' | 'up' | 'down' | 'left' | 'right';
    map: Array<Array<BlockKey>>;
    show: () => void;
    // coins: Array<Array<number>, Array<number>>;
    coinsX: Array<boolean>;
    coinsY: Array<boolean>;
};

export type Controller = {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    tv: TransformedView;
};

export type TransformedView = {
    fillRect: (
        x: number,
        y: number,
        w: number,
        h: number,
        color: string
    ) => void;
    strokeRect: (
        x: number,
        y: number,
        w: number,
        h: number,
        color: string
    ) => void;
    fillCircle: (x: number, y: number, r: number, color: string) => void;
};
