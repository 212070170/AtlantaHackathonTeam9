/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';

    filters.filter('context', function() {
        return function(value, optional1, optional2) {
            var response = value == 'dispatched' ? value + " to FE" : value + " by OLE";
            return response;
        };
    });


    return filters;
});
