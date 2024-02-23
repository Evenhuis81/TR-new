// Disabling this rule cause we know of no other way
/* eslint-disable @typescript-eslint/consistent-type-assertions */
type Writeable<T> = {-readonly [P in keyof T]: T[P]};

/**
 * Makes a deep copy
 * If it's not an object or array, it will return toCopy
 *
 * We use deepCopy over structuredClone because deepCopy can be significantly faster (up to ~10x times)
 * depending on the type and size of an object
 */
export const deepCopy = <T = unknown>(toCopy: T): Writeable<T> => {
    if (typeof toCopy !== 'object' || toCopy === null) return toCopy;

    if (Array.isArray(toCopy)) return toCopy.map(value => deepCopy(value)) as unknown as T;

    const copiedObject = {} as T;

    for (const key in toCopy) copiedObject[key] = deepCopy(toCopy[key]) as T[Extract<keyof T, string>];

    return copiedObject;
};
