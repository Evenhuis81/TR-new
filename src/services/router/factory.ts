import type {LazyRouteComponent, RouteSettings} from './types';
import type {RouteComponent, RouteRecordRaw} from 'vue-router';

export const createConfig = (
    path: string,
    name: string,
    auth: boolean,
    title: string,
    component?: RouteComponent | LazyRouteComponent,
    isAdmin = true,
    canSeeWhenLoggedIn = true,
): RouteRecordRaw | undefined => {
    if (!component) return;

    return {
        path,
        name,
        component,
        meta: {auth, title, canSeeWhenLoggedIn, isAdmin},
    };
};

const createConfigWithChildren = (
    path: string,
    children: RouteRecordRaw[],
    component?: RouteComponent | LazyRouteComponent,
): RouteRecordRaw | undefined => {
    if (!component) return;

    return {
        path,
        component,
        children,
    };
};

export const createCreateRouteFromSettings = (settings: RouteSettings) =>
    createConfig(
        settings.createPath,
        settings.createName,
        settings.createPageAuthOnly,
        settings.createTitle,
        settings.createComponent ? settings.createComponent : undefined,
        settings.isAdmin,
    );

export const createEditRouteFromSettings = (settings: RouteSettings) =>
    createConfig(
        settings.editPath,
        settings.editName,
        settings.editPageAuthOnly,
        settings.editTitle,
        settings.editComponent ? settings.editComponent : undefined,
        settings.isAdmin,
    );

export const createOverviewRouteFromSettings = (settings: RouteSettings) =>
    createConfig(
        settings.overviewPath,
        settings.overviewName,
        settings.overviewPageAuthOnly,
        settings.overviewTitle,
        settings.overviewComponent ? settings.overviewComponent : undefined,
        settings.isAdmin,
    );

export const createShowRouteFromSettings = (settings: RouteSettings) => {
    if (settings.showChildren) {
        return createConfigWithChildren(
            settings.showPath,
            settings.showChildren,
            settings.showComponent ? settings.showComponent : undefined,
        );
    }

    return createConfig(
        settings.showPath,
        settings.showName,
        settings.showPageAuthOnly,
        settings.showTitle,
        settings.showComponent ? settings.showComponent : undefined,
        settings.isAdmin,
    );
};

export const createBaseRouteFromSettings = (settings: RouteSettings, children: RouteRecordRaw[]) =>
    createConfigWithChildren(settings.basePath, children, settings.baseComponent ? settings.baseComponent : undefined);
