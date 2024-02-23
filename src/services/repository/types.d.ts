import type {New, Updatable} from 'types/generics';
import type {Item} from 'types/index';

export interface Repository<T extends Item> {
    getAll: () => Promise<void>;
    getById: (id: number) => Promise<void>;
    /**
     * Makes a post request to the backend Creating a new resource in the backend
     * @returns The id of the new item
     */
    create: (newItem: New<T>) => Promise<T['id']>;
    update: (id: number, item: Updatable<T>) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
