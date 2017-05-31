    /**
     * Created by fabioalmeida on 9/29/16.
     */
    define(['angular', './module'], function (angular, controllers) {
        'use strict';
        return controllers.controller('MainCtrl', ['$scope', '$rootScope', '$log','$location', function ($scope, $rootScope, $log, $location) {
            $scope.name = 'MainCtrl';
            $log.info( $scope.name  + ' controller loaded!');

            $scope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error){
                if(error == "not_logged_in"){
                    $location.path("/unauthorized");
                    $scope.$apply();
                }
            });

        }]);
    });

