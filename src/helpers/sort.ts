/**
 * Compare two numbers or strings, to see their sorting order
 * - returns: -1, 0, 1 when respectively a < b, a == b, a > b
 */

// eslint-disable-next-line complexity
export const compare = <T extends SortableType>(firstElement: T, secondElement: T, reverse = false): -1 | 0 | 1 => {
    let first: SortableType = firstElement;
    let second: SortableType = secondElement;

    if (first === null) return reverse ? -1 : 1;
    if (second === null) return reverse ? 1 : -1;

    if (typeof first === 'string' && typeof second === 'string') {
        first = first.toLowerCase();
        second = second.toLowerCase();
    }

    if (first < second) return reverse ? 1 : -1;
    if (first > second) return reverse ? -1 : 1;

    return 0;
};

type SortableType = number | string | Date | null;

/**
 * Sort the array w.r.t. a key-value
 * - Key can be:
 *   * A field of each item.
 *   * A custom-computed value, obtained via a function.
 * - Does not modify the original.
 * */
export const sortBy = <T>(array: T[], key: keyof T | ((item: T) => SortableType), reverse = false): T[] => {
    // eslint-disable-next-line complexity
    const getValue = (item: T): SortableType => {
        if (key instanceof Function) return key(item);

        const value = item[key];
        if (typeof value === 'number' || typeof value === 'string' || value instanceof Date) return value;

        if (value === null) return null;

        throw new Error(`invalid sorting type for key ${String(key)} with value ${value}`);
    };

    return array
        .map<[SortableType, T]>(item => [getValue(item), item])
        .sort((one, other) => compare(one[0], other[0], reverse))
        .map(([, item]) => item);
};
