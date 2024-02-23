const state: Record<string, ReturnType<typeof setState>> = {};

const setState = <T>(id: string, items: T) => {
    state[id] = items;

    return items;
};

export const createStore = (id: string) => {
    let state;
    // stores[id] = {};

    // const getStore = () => stores[id];

    // return { set: (items: T) => (state = items), get: () => state };
    // return { setStore, getStore };

    return { id: {} };
};

// const stores: Record<string, T> = {}

// const store = createStore<ControllerResource>();

// export default store;
