/* global define */
define(['angular', './module'], function(angular, directives) {
    'use strict';

    /* Directives  */

    directives.directive('afterRepeat',['$timeout',
        function($timeout) {
            return {
                restrict:'A',
                link: function (scope, element, attr) {
                    if (scope.$last === true) {
                        $timeout(function () {
                            scope.$emit(attr.afterRepeat);
                        });
                    }
                }

            }

        }]);

    return directives;
});