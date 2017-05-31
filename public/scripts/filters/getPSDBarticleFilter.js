/**
 * Created by fabioalmeida on 9/29/16.
 */
define(['angular', './module'], function (angular, filters) {
    'use strict';
    filters.filter('psdb', function () {
        return function (input, lowercase) {
            if(input != null){
                var s = input.match(/externalId\=[0-9]{2,10}/g);
                if(s != null){
                    for(var i = 0; i < s.length; i++){
                        s[i] = s[i].replace("externalId=","");
                    }
                }
                return s;
            }
            return input;
        };
    });

    return filters;
});
