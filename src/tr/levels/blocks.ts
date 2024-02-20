import { getPlayer } from '../player';
import { BlockType } from '../types/index.';

const player = getPlayer();
// const coins = getCoins();

export const block: Record<BlockType, Record<string, () => void>> = {
    X: {
        up: () => {
            player.stop();
            player.pos.y = player.absPos.y + 1;
        },
        down: () => {
            player.stop();
            player.pos.y = player.absPos.y;
        },
        left: () => {
            player.stop();
            player.pos.x = player.absPos.x + 1;
        },
        right: () => {
            player.stop();
            player.pos.x = player.absPos.x;
        },
    },
    '.': {
        up: () => {
            // if (coins.coinsX[player.absPos.x] && coins.coinsY[player.absPos.y])
        },
        down: () => {},
        left: () => {},
        right: () => {},
    },
};
