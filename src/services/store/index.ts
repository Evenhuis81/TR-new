import type { State, StoreModule } from './types';
import type { Item } from '../../types/index';

import { computed, ref } from 'vue';

import { deepCopy } from '../../helpers/copy';
import { getFromStorage, putInStorage } from '../storage';

const handleNewItems = <T extends Item>(items: T[], state: State<T>) => {
    for (const stringId in state.value) {
        const id = parseInt(stringId);
        // Search for new data entry
        const newDataIndex = items.findIndex((entry) => entry.id === id);
        // If not found, then delete entry
        if (newDataIndex === -1) {
            delete state.value[id];
            continue;
        }
        // Remove new entry from allData, so further searches speed up
        const [newData] = items.splice(newDataIndex, 1);
        const originalState = deepCopy(state.value[id]);
        const newState = Object.assign(originalState, newData);
        state.value[newData.id] = Object.freeze(newState);
    }

    // Put all remaining new data in the state
    for (const newData of items)
        state.value[newData.id] = Object.freeze(newData);
};

/**
 * Creates a store module for the given module name.
 */
export const storeModuleFactory = <T extends Item>(
    moduleName: string
): StoreModule<T> => {
    const state: State<T> = ref({});

    const storedState = getFromStorage<{ [id: number]: Readonly<T> }>(
        moduleName,
        {}
    );
    state.value = storedState;

    return {
        /**
         * GETTERS
         */
        /** Get all items from the store */
        all: computed(() => Object.values(state.value)),
        /**
         * Get an item from the state by id
         */
        byId: (id: number) => computed(() => state.value[id] ?? undefined),
        /**
         * SETTERS
         */
        /**
         * Set items in the state.
         */
        setAll: (items: T[]) => {
            handleNewItems(items, state);
            putInStorage(moduleName, state.value);
        },
        /**
         * Set one specific item in the storage
         */
        setById: (item: T) => {
            state.value[item.id] = Object.freeze(item);
            putInStorage(moduleName, state.value);
        },
        /**
         * Delete one specific item in the storage by id
         */
        deleteById: (id: number) => {
            delete state.value[id];
            putInStorage(moduleName, state.value);
        },
    };
};
