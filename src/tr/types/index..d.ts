// export type DrawType = 'fillRect' | 'strokeRect' | 'fillCircle';

// type DrawObjectBase = {
//     color: string;
//     x: number;
//     y: number;
// };

// type FillRect = DrawObjectBase & { w: number; h: number };
// type StrokeRect = DrawObjectBase & { w: number; h: number };
// type FillCircle = DrawObjectBase & { r: number };

// export type DrawObject = {
//     type: DrawType;
//     fillRect: FillRect;
//     strokeRect: { color: string; x: number; y: number; w: number; h: number };
//     fillCircle: { color: string; x: number; y: number; r: number };
// };

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
    tv: TransformedView;
}

export type InputKey = 'w' | 's' | 'a' | 'd' | 'W' | 'S' | 'A' | 'D';

type Direction = 'none' | 'up' | 'down' | 'left' | 'right';
type Face = Omit<Direction, 'none'>;

export type Player = {
    pos: { x: number; y: number };
    absPos: { x: number; y: number };
    vel: { x: number; y: number };
    speed: number;
    move: Direction;
    face: Exclude<Direction, 'none'>;
    stop: Function;
    update: Function;
    show: Function;
};

export type MapType = 'X' | '.' | ',';

export type Level = {
    start: { x: number; y: number };
    face: Omit<Direction, 'none'>;
    map: Array<Array<MapType>>;
    show: Function;
};

type Rect = {
    x: number;
    y: number;
    w: number;
    h: number;
};

export type GetTV = (scale: number) => TransformedView;

export type TransformedView = {
    world2Screen: (rect: Rect) => Rect;
};

export type Engine = {
    addUpdate: (update: Function) => void;
    addShow: (show: Function) => void;
    run: () => void;
    abort: () => void;
    runOnce: () => void;
};
