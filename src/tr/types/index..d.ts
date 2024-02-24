export type BlockType = 'X' | '.';

export type Options = {
    pos: string;
    w: number;
    h: number;
    bg: string;
    // clear: boolean;
};

export interface ControllerResource {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    tv: TransformedView;
    engine: Engine;
}

export type InputKey = 'w' | 's' | 'a' | 'd' | 'W' | 'S' | 'A' | 'D';

// export type Player = {
//     update: () => void;
//     show: () => void;
// };

export type Player = {
    pos: { x: number; y: number };
    absPos: { x: number; y: number };
    vel: { x: number; y: number };
    speed: number;
    move: 'none' | 'up' | 'down' | 'left' | 'right';
    face: 'up' | 'down' | 'left' | 'right';
    stop: () => void;
    update: () => void;
    show: () => void;
};

export type Level = {
    start: { x: number; y: number };
    face: 'none' | 'up' | 'down' | 'left' | 'right';
    map: Array<Array<BlockType>>;
    show: () => void;
    // coins: Array<Array<number>, Array<number>>;
    // coinsX: Array<boolean>;
    // coinsY: Array<boolean>;
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

export type Engine = {
    addUpdate: (update: () => void) => void;
    addShow: (show: () => void) => void;
    run: () => void;
    abort: () => void;
    runOnce: () => void;
};
