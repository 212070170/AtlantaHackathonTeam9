/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';

    filters.filter('orderByField', function() {
        return function(items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function(item,key) {
                item.job = key;
                filtered.push(item);
            });
            filtered.sort(function (a, b) {
                return (a[field] > b[field] ? 1 : -1);
            });
            if(reverse) filtered.reverse();
            return filtered;
        };
    });


    return filters;
});
