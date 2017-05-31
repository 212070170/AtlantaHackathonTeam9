/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';
    filters.filter('dispatch', function () {
        return function (input, threshold) {
            return input > threshold ? "dispatched":"fixed";
        };
    });

    return filters;
});
