export const removeDiacritics = (string: string): string =>
    string
        .normalize('NFD')
        // https://caniuse.com/mdn-javascript_builtins_regexp_property_escapes
        // Note there is no IE support. but rollup/babel has a polyfill for this regexp.
        .replace(/\p{Diacritic}/gu, '')
        .normalize('NFC');

export const capitalizeString = (value: string) => `${value[0].toUpperCase()}${value.substring(1)}`;

export const removeDashString = (value: string) => value.toString().replace(/[-/]/g, ' ');

// https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
export const kebabCase = (string: string) =>
    string
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
