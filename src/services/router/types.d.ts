import type {NavigationGuardNext, RouteComponent, RouteLocation, RouteRecordRaw} from 'vue-router';

export type BeforeRouteMiddleware = (to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) => boolean;
export type AfterRouteMiddleware = (to: RouteLocation, from: RouteLocation) => void;

export type LazyRouteComponent = () => Promise<RouteComponent>;

export interface RouteSettings {
    /** Route names */
    baseName: string;
    createName: string;
    editName: string;
    overviewName: string;
    showName: string;

    /** Route paths */
    basePath: string;
    createPath: string;
    editPath: string;
    overviewPath: string;
    showPath: string;

    /** Route components */
    baseComponent?: RouteComponent | LazyRouteComponent;
    createComponent?: RouteComponent | LazyRouteComponent;
    editComponent?: RouteComponent | LazyRouteComponent;
    overviewComponent?: RouteComponent | LazyRouteComponent;
    showComponent?: RouteComponent | LazyRouteComponent;

    /** Route titles */
    createTitle: string;
    editTitle: string;
    overviewTitle: string;
    showTitle: string;

    /** Route children */
    showChildren?: RouteRecordRaw[];

    /** Create page settings */
    createPageAuthOnly: boolean;

    /** Edit page settings */
    editPageAuthOnly: boolean;

    /** Overview page settings */
    overviewPageAuthOnly: boolean;

    /** Show page settings */
    showPageAuthOnly: boolean;

    /** Admin page */
    isAdmin: boolean;
}
