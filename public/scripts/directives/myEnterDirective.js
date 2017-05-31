/**
 * Created by fabioalmeida on 9/28/16.
 */
/*global define */
define(['angular', './module'], function(angular, directives) {
    'use strict';

    /* Directives  */
    directives.directive('myEnter', [ function() {
        return {
            restrict: 'A',
            replace: false,
            link: function (scope, element, attrs) {
                element.bind("keydown", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attrs.myEnter);
                        });

                        event.preventDefault();
                    }
                });

            }
        }
    }]);

    return directives;
});