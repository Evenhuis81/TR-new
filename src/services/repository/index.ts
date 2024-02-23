import type {Repository} from './types';
import type {AxiosResponse} from 'axios';
import type {StoreModule} from 'services/store/types';
import type {New, Updatable} from 'types/generics';
import type {Item} from 'types/index';

import {ref} from 'vue';

import {deleteRequest, getRequest, postRequest} from 'services/http';

const postCreateAndSetInStoreById = async <T extends Item>(
    storeModule: StoreModule<T>,
    url: string,
    item: Updatable<T> | New<T>,
) => {
    const {data} = await postRequest(url, item);
    // In the unlikely case that postRequest itself does not throw a exception. we wil throw one ourselves.
    if (!data) throw new Error('Post request returned empty response');
    storeModule.setById(data);

    return parseInt(data.id);
    // We are guaranteed a id from the api
};

const postUpdateAndSetInStoreById = async <T extends Item>(
    storeModule: StoreModule<T>,
    url: string,
    item: Updatable<T> | New<T>,
) => {
    const {data} = await postRequest(url, item);
    if (!data) throw new Error('Post request returned empty response');
    storeModule.setById(data);
    // We return void here because unlike Create we do not need to return the Id it is already known.
};

export const repositoryFactory = <T extends Item>(moduleName: string, storeModule: StoreModule<T>): Repository<T> => {
    const requestingAll = ref<Promise<AxiosResponse> | null>(null);

    return {
        // For some requests the responses takes quite a while because of the size.
        // To avoid double requests we add a simple extra check
        getAll: async () => {
            if (requestingAll.value) {
                await requestingAll.value;

                return;
            }

            requestingAll.value = getRequest(moduleName);

            const response = await requestingAll.value;
            if (!response?.data) return;
            storeModule.setAll(response.data);
            // eslint-disable-next-line require-atomic-updates
            requestingAll.value = null;
        },
        getById: async (id: number) => {
            const {data} = await getRequest(`${moduleName}/${id}`);
            if (!data) return;
            storeModule.setById(data);
        },
        create: (newItem: New<T>) => postCreateAndSetInStoreById(storeModule, moduleName, newItem),
        update: (id: number, item: Updatable<T>) =>
            postUpdateAndSetInStoreById(storeModule, `${moduleName}/${id}`, item),
        delete: async (id: number) => {
            await deleteRequest(`${moduleName}/${id}`);
            storeModule.deleteById(id);
        },
    };
};
