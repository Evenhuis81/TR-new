import type {New} from 'types/generics';
import type {Item} from 'types/index';

export type Transformed<T extends Item> = Readonly<T> & {
    update(data: T): Promise<void>;
    delete(): Promise<void>;
    get resource(): T;
};

export type NewTransformed<T extends New<Item>> = Readonly<T> & {
    create(data: T): Promise<number>;
    get resource(): T;
};
