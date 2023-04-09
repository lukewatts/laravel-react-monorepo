import { router } from '@inertiajs/core';

/**
 * routeTo
 *
 * This is a wrapper around the Inertia router.visit() method. It allows us to
 * use named routes, and also to enable/disable smart routing.
 * Smart routing is enabled by default, and will use named routes if they exist.
 *
 * @param {*} url
 * @param {*} options
 * @returns {Promise}
 */
export default function routeTo(
    url,
    options = {
        smartRouting: true,
        data: {},
        preserveState: 'preserve',
        preserveScroll: true,
        replace: false,
        only: [],
        headers: {},
        onCancelToken: () => {},
    }
) {
    const { smartRouting, data, preserveState, preserveScroll, replace, only, headers, onCancelToken } = options;

    // If smart routing is enabled, and a named route exists for the given URL, then we'll use the named route
    if (smartRouting && route().has(url)) {
        return router.visit(route(url), data, preserveState, preserveScroll, replace, only, headers, onCancelToken);
    }

    return router.visit(url, data, preserveState, preserveScroll, replace, only, headers, onCancelToken);
}
