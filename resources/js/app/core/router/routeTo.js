import {
    FormDataConvertible,
    mergeDataIntoQueryString,
    Method,
    PreserveStateOption,
    Progress,
    router,
    shouldIntercept,
  } from '@inertiajs/core';

    export default function routeTo(
        url,
        data = {},
        preserveState = 'preserve',
        preserveScroll = true,
        replace = false,
        only = [],
        headers = {},
        onCancelToken = () => {},
    ) {
        if (shouldIntercept(url)) {
            return router.intercept(url, data, preserveState, preserveScroll, replace, only, headers, onCancelToken);
        }

        return router.visit(url, data, preserveState, preserveScroll, replace, only, headers, onCancelToken);
    }
    