import { ControllerResource, Level, Player } from './types/index.';

const createStore = <T extends {}>() => {
    const state = <T>{};

    const set = (items: T) => Object.assign(state, items);

    return { set, state };
};

export const controller = createStore<ControllerResource>();

export const level = createStore<Level>();

export const player = createStore<Player>();

export default null;
