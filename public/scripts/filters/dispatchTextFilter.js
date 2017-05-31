/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';
    filters.filter('dispatch_text', function () {
        return function (input, threshold) {
            return input  == "dispatched" ? "dispatched to FE":"fixed by RTE";
        };
    });

    return filters;
});
