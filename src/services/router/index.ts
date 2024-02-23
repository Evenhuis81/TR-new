import type {RouteSettings} from './types';
import type {App} from 'vue';
import type {
    LocationQuery,
    LocationQueryRaw,
    NavigationGuard,
    NavigationHookAfter,
    RouteLocationRaw,
    RouteRecordRaw,
} from 'vue-router';

import {createRouter, createWebHistory, useRouter} from 'vue-router';

import {IS_ADMIN_APP} from 'constants/env';

import {
    createBaseRouteFromSettings,
    createCreateRouteFromSettings,
    createEditRouteFromSettings,
    createOverviewRouteFromSettings,
    createShowRouteFromSettings,
} from './factory';
import {CREATE_PAGE_NAME, EDIT_PAGE_NAME, OVERVIEW_PAGE_NAME, SHOW_PAGE_NAME} from './settings';

const router = createRouter({
    history: createWebHistory(IS_ADMIN_APP ? 'beheer' : ''),
    routes: [],
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'instant',
        };
    },
});

export const useRouterInApp = (app: App<Element>) => app.use(router);

const beforeRouteMiddleware: NavigationGuard[] = [
    (to, from) => {
        const ignoreFromQuery = to.meta.ignoreFrom;
        if (ignoreFromQuery) return false;

        const fromQuery = from.query.from;
        if (fromQuery && typeof fromQuery === 'string') {
            if (fromQuery === to.fullPath) return false;
            router.push(fromQuery);

            return true;
        }

        return false;
    },
];

router.beforeEach(async (to, from, next) => {
    for (const middlewareFunc of beforeRouteMiddleware) {
        // MiddlewareFunc will return true if it encountered problems
        if (await middlewareFunc(to, from, next)) return next(false);
    }

    return next();
});

export const registerBeforeRouteMiddleware = (middleware: NavigationGuard) => beforeRouteMiddleware.push(middleware);

const afterRouteMiddleware: NavigationHookAfter[] = [];

router.afterEach((to, from) => {
    for (const middlewareFunc of afterRouteMiddleware) middlewareFunc(to, from);
});

export const registerAfterRouteMiddleware = (middleware: NavigationHookAfter) => afterRouteMiddleware.push(middleware);

export const addRoutes = (routes: RouteRecordRaw[]) => {
    for (const route of routes) router.addRoute(route);
};

export const goToRoute = (name: string, id?: number, query?: LocationQueryRaw) => {
    const route: RouteLocationRaw = {name};
    if (id) route.params = {id: id.toString()};
    if (query) route.query = query;

    // eslint-disable-next-line
    router.push(route).catch(err => {
        // Ignore the vue-router err regarding navigating to the page they are already on.
        if (err && err.name !== 'NavigationDuplicated') {
            // But print any other errors to the console
            // eslint-disable-next-line no-console
            console.error(err);
        }
    });
};

// eslint-disable-next-line complexity
export const createRoutes = (settings: RouteSettings) => {
    const routes: RouteRecordRaw[] = [];

    const CreateComponent = createCreateRouteFromSettings(settings);
    if (CreateComponent) routes.push(CreateComponent);

    const EditComponent = createEditRouteFromSettings(settings);
    if (EditComponent) routes.push(EditComponent);

    const OverviewComponent = createOverviewRouteFromSettings(settings);
    if (OverviewComponent) routes.push(OverviewComponent);

    const ShowComponent = createShowRouteFromSettings(settings);
    if (ShowComponent) routes.push(ShowComponent);

    const BaseComponent = createBaseRouteFromSettings(settings, routes);
    if (!BaseComponent) return [];

    return [BaseComponent];
};

const onPage = (pageName: string) => router.currentRoute.value.name?.toString().includes(pageName);

export const onCreatePage = (baseRouteName: string) => onPage(baseRouteName + CREATE_PAGE_NAME);
export const onEditPage = (baseRouteName: string) => onPage(baseRouteName + EDIT_PAGE_NAME);
export const onOverviewPage = (baseRouteName: string) => onPage(baseRouteName + OVERVIEW_PAGE_NAME);
export const onShowPage = (baseRouteName: string) => onPage(baseRouteName + SHOW_PAGE_NAME);

export const goToCreatePage = (name: string) => goToRoute(`${name}${CREATE_PAGE_NAME}`);
export const goToEditPage = (name: string, id: number) => goToRoute(`${name}${EDIT_PAGE_NAME}`, id);
export const goToShowPage = (name: string, id: number, query?: LocationQueryRaw) =>
    goToRoute(`${name}${SHOW_PAGE_NAME}`, id, query);
export const goToOverviewPage = (name: string) => goToRoute(`${name}${OVERVIEW_PAGE_NAME}`);

export const goToGuidePage = (exerciseName: string, codebookName: string | null) => {
    const route: RouteLocationRaw = {
        name: 'exercises.show',
        params: {name: exerciseName, codebook: codebookName},
    };

    // eslint-disable-next-line
    router.push(route).catch(err => {
        // Ignore the vue-router err regarding navigating to the page they are already on.
        if (err && err.name !== 'NavigationDuplicated') {
            // But print any other errors to the console
            // eslint-disable-next-line no-console
            console.error(err);
        }
    });
};

export const getCurrentRouteQuery = () => router.currentRoute.value.query;
export const getCurrentRouteName = () => router.currentRoute.value.name;
export const getCurrentRouteRef = () => router.currentRoute;

export const getCurrentRouteId = () => parseInt(router.currentRoute.value.params.id?.toString());
export const getCurrentRouteNameParam = () => router.currentRoute.value.params.name?.toString();
export const getCurrentRouteCodebookName = () => router.currentRoute.value.params.codebook?.toString();

export const goToPreviousPage = () => router.back();

export const routeExists = (to: RouteLocationRaw) => !!useRouter().resolve(to).name;

export const changeRouteQuery = (query: LocationQuery) => router.push({query});

export const clearRouteQuery = () => router.replace({query: undefined});

export const getUrlForRouteName = (name: string, id?: number) => router.resolve({name, params: {id}}).fullPath;
