import type {RouteSettings} from './types';

import {removeDiacritics} from 'helpers/string';
import {
    getCapitalizedPluralTranslation,
    getCapitalizedSingularTranslation,
    getPluralTranslation,
} from 'services/translation';

export const CREATE_PAGE_NAME = '.create';
export const EDIT_PAGE_NAME = '.edit';
export const OVERVIEW_PAGE_NAME = '.overview';
export const SHOW_PAGE_NAME = '.show';

export const routeSettingsFactory = (baseRouteName: string): RouteSettings => ({
    /** Route names */
    baseName: baseRouteName,
    createName: baseRouteName + CREATE_PAGE_NAME,
    editName: baseRouteName + EDIT_PAGE_NAME,
    overviewName: baseRouteName + OVERVIEW_PAGE_NAME,
    showName: baseRouteName + SHOW_PAGE_NAME,

    /** Route paths */
    basePath: `/${removeDiacritics(getPluralTranslation(baseRouteName))}`,
    createPath: 'toevoegen',
    editPath: ':id/aanpassen',
    overviewPath: '',
    showPath: ':id',

    /** Route components */
    baseComponent: undefined,
    createComponent: undefined,
    editComponent: undefined,
    overviewComponent: undefined,
    showComponent: undefined,

    /** Route titles */
    createTitle: `${getCapitalizedSingularTranslation(baseRouteName)} aanmaken`,
    editTitle: `${getCapitalizedSingularTranslation(baseRouteName)} aanpassen`,
    overviewTitle: `${getCapitalizedPluralTranslation(baseRouteName)} overzicht`,
    showTitle: `${getCapitalizedSingularTranslation(baseRouteName)} bekijken`,

    /** Route children */
    showChildren: undefined,

    /** Create page settings */
    createPageAuthOnly: true,

    /** Edit page settings */
    editPageAuthOnly: true,

    /** Overview page settings */
    overviewPageAuthOnly: true,

    /** Show page settings */
    showPageAuthOnly: true,

    /** Admin page */
    isAdmin: true,
});
