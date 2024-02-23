// const store: Record<string, ReturnType<typeof setItems>> = {};
// export type State<T extends Item> = Ref<{[id: number]: Readonly<T>}>;
type Store<T> = Record<string, T>;

const store: Store<T> = {};

// TODO:: Make store and use of a store and set and getters and actions;
// Make it a module system for multiple stores which all act seperately;
// Typescript copy from existing vue-services store. (see project CodeBook or Manos for implementation)
// Either dynamically or specifically per project;
//

export const useStore = (id: string) => {
    const setItems = <T>(items: T) => {
        store[id] = items;

        return items;
    };

    const getItems = () => {
        return store[id];
    };

    return { setItems, getItems };
};

// const store: Record<string, any> = {}

// const state: State<T> = ref({});

// const store = createStore<ControllerResource>();

// export default store;
