export type DrawType = 'fillRect' | 'strokeRect' | 'fillCircle';

export type DrawObject = {
    type: DrawType;
    color: string;
    x: number;
    y: number;
    w: number;
    h: number;
    r: number;
};

// export type FillRect = Omit<DrawObject, 'r'>;
// export type StrokeRect = Omit<DrawObject, 'r'>;
// export type FillCircle = Omit<DrawObject, 'w' | 'h'>;

// export type DrawObjects = FillRect | StrokeRect | FillCircle;

export type Options = {
    pos: string;
    w: number;
    h: number;
    bg: string;
};

export interface ControllerResource {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    engine: Engine;
}

export type InputKey = 'w' | 's' | 'a' | 'd' | 'W' | 'S' | 'A' | 'D';

type Direction = 'up' | 'down' | 'left' | 'right';

export type Player = {
    pos: { x: number; y: number };
    absPos: { x: number; y: number };
    vel: { x: number; y: number };
    speed: number;
    move: Direction | 'none';
    face: Direction;
    stop: () => void;
    update: () => void;
    draw: DrawObject;
};

export type MapType = 'X' | '.';
export type BlockType = { draw: DrawObject };

export type Level = {
    start: { x: number; y: number };
    face: 'none' | 'up' | 'down' | 'left' | 'right';
    map: Array<Array<MapType>>;
    blocks: Array<Array<BlockType>>;
    getBlockDrawList: () => BlockType[];
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
    addDraw: (draw: DrawObject) => void;
    run: () => void;
    abort: () => void;
    runOnce: () => void;
};
