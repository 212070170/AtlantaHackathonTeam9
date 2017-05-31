/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';
    filters.filter('filterobject', function() {
        return function(input, search, k) {
            if (!input) return input;
            if (!search) return input;
            var expected = ('' + search).toLowerCase();
            var result = {};
            angular.forEach(input, function(value, key) {
                console.log("VALUE",value[k],"KEY",key);
                var actual = ('' + value[k]).toLowerCase();
                if (actual.indexOf(expected) !== -1) {
                    result[key] = value[k];
                }
            });
            return result;
        }
    });

    return filters;
});
