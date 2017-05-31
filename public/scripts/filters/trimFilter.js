/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';
    filters.filter('trim', function () {
        return function (input, lowercase) {
            return input.trim();
        };
    });

    return filters;
});
