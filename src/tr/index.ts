import { getEngine } from '../canvasAPI/engine';
import { getLevel } from './levels';
import { getPlayer } from './player';

const engine = getEngine();
const player = getPlayer();
const level = getLevel();

export const startGame = () => {
    engine.addUpdate(player.update);
    engine.addShow(level.show);
    engine.addShow(player.show);
    engine.run();
};
