export type DrawType = 'fillRect' | 'strokeRect' | 'fillCircle';

type DrawObjectBase = {
    color: string;
    x: number;
    y: number;
};

type FillRect = DrawObjectBase & { w: number; h: number };
type StrokeRect = DrawObjectBase & { w: number; h: number };
type FillCircle = DrawObjectBase & { r: number };

export type DrawObject = {
    type: DrawType;
    fillRect: FillRect;
    strokeRect: { color: string; x: number; y: number; w: number; h: number };
    fillCircle: { color: string; x: number; y: number; r: number };
};

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
    draw: Partial<DrawObject>;
};

export type MapType = 'X' | '.';
export type BlockType = { draw: Partial<DrawObject> };

export type Level = {
    start: { x: number; y: number };
    face: 'none' | 'up' | 'down' | 'left' | 'right';
    map: Array<Array<MapType>>;
    blocks: Array<Array<BlockType>>;
    getBlockList: () => BlockType[];
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
    addDraw: (draw: DrawObjects) => void;
    run: () => void;
    abort: () => void;
    runOnce: () => void;
};
