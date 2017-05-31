/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';

    filters.filter('orderObjectByValue', function() {
        return function(items, reverse) {

            var filtered = [];
            angular.forEach(items, function(value,key) {
                var obj = {};
                obj.key = key;
                obj.value = value;
                filtered.push(obj);

            });

            filtered.sort(function (a, b) {
                return (a['value'].relevancy > b['value'].relevancy ? 1 : -1);
            });
            if(reverse) filtered.reverse();
            return filtered;
        };
    });

    console.log("filtered: ");

    return filters;
});
