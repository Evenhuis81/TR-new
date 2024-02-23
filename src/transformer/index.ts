import type {Repository} from 'services/repository/types';
import type {StoreModule} from 'services/store/types';
import type {New} from 'types/generics';
import type {Item} from 'types/index';
import type {Ref} from 'vue';

import {computed, ref} from 'vue';

import {deepCopy} from 'helpers/copy';

export const transformerFactory = <T extends Item>(resource: T | New<T>, repository: Repository<T>) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const mutableResource = ref(deepCopy(resource)) as Ref<T | New<T>>;

    const resourceTransformation = {
        get resource() {
            return mutableResource.value;
        },
    };

    for (const prop in resource) {
        Object.defineProperty(resourceTransformation, prop, {
            get() {
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                return resource[prop as keyof typeof resource];
            },
        });
    }

    if ('id' in resource) {
        Object.assign(resourceTransformation, {
            update: () => repository.update(resource.id, mutableResource.value),
            delete: () => repository.delete(resource.id),
        });
    } else {
        Object.assign(resourceTransformation, {
            create: () => repository.create(mutableResource.value),
        });
    }

    return resourceTransformation;
};

export const relationshipConstructor =
    <Model, T extends Item>(relationshipIds: number[], transformer: (resource: T) => Model, store: StoreModule<T>) =>
        () =>
            computed(() =>
                relationshipIds.reduce<Model[]>((acc, id) => {
                    const relationship = store.byId(id).value;
                    if (!relationship) return acc;
                    acc.push(transformer(relationship));

                    return acc;
                }, []),
            );
