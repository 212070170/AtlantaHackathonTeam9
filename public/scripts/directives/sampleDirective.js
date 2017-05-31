/**
 * Created by fabioalmeida on 9/28/16.
 */
/*global define */
define(['angular', './module'], function(angular, directives) {
    'use strict';

    /* Directives  */
    directives.directive('sample', [ function() {
        return {
            restrict: 'AE',
            replace: false,
            link: function (scope, element, attrs) {

            }
        }
    }]);

    return directives;
});