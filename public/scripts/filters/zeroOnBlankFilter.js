/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';

    filters.filter("zeroOnBlank",function(){
        return function(value, optional1, optional2) {
            return (value == '0' || value == '' || value == null || value == undefined) ? "0" : value;
        }
    })


    return filters;
});
