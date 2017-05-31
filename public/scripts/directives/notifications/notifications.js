define(['angular', '../module'], function(angular, module) {
	var Notifications = function() {
		return {
			restrict: 'E',
			template: '<div class="notifications"><notification data-value="notification" data-type="{{notification.type}}" data-message="{{notification.message}}" data-ng-repeat="notification in notifications track by $index" data-ng-if="!!notification.invisible !== true"></notification></div>',
			replace: true,
			scope: {
				store: "="
			},
			link: function($scope, element, attrs) {
				$scope.notifications = [];

				$scope.$watchCollection(function() {
					return $scope.store.all();
				}, function(notifications) {
					// Update the notifications . . . 
					$scope.notifications = notifications;
				}, true); // Deep watch enabled.
			}
		};
	};

	module.directive('notifications', [Notifications]);
});