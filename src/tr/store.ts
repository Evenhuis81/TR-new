import { ControllerResource, Level, Player } from './types/index.';

const createStore = <T extends {}>() => {
    const state = <T>{};

    const set = (items: T) => Object.assign(state, items);

    return { set, state };
};

export const controllerStore = createStore<ControllerResource>();

export const levelStore = createStore<Level>();

export const playerStore = createStore<Player>();

export default null;
