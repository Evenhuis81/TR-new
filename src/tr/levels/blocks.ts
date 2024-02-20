import { getCoins } from '.';
import { BlockType, Player } from '../types/index.';

const coins = getCoins();
// const player = getPlayer();

export const block: Record<
    BlockType,
    Record<string, (player: Player) => void>
> = {
    X: {
        up: (player) => {
            player.stop();
            player.pos.y = player.absPos.y + 1;
        },
        down: (player) => {
            player.stop();
            player.pos.y = player.absPos.y;
        },
        left: (player) => {
            player.stop();
            player.pos.x = player.absPos.x + 1;
        },
        right: (player) => {
            player.stop();
            player.pos.x = player.absPos.x;
        },
    },
    '.': {
        up: (player) => {
            // if (coins.coinsX[player.absPos.x] && coins.coinsY[player.absPos.y])
        },
        down: (player) => {},
        left: (player) => {},
        right: (player) => {},
    },
};

// export const getBlocks = () => {
//     //
// };

// type BlockValue = {
//     collide: (
//         player: PlayerProperties,
//         resolvePos: { x: number; y: number },
//         level: Level
//     ) => void;
// };
// type Block = Record<BlockKey, BlockValue>;

// X: {
//     collide: (
//         player: PlayerProperties,
//         resolvePos: { x: number; y: number }
//     ) => {
//         player.stop();
//         player.pos.x = resolvePos.x;
//         player.pos.y = resolvePos.y;
//     },
// },
// '.': {
//     collide: (player: PlayerProperties, _, level: Level) => {
//         const coin = level.map[player.absPos];
//     },
// },
