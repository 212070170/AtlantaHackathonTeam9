define(['angular', '../module', 'jquery'], function(angular, module, $) {
	var Notification = function($timeout, cms) {
		var successTime = 3000;
		var infoTime = 3000;
		var warningTime = 5000;
		var errorTime = 7000;

		return {
			restrict: 'E',
			template: '<div class="notification">'+
                            '<div class="alert {{type}}">'+
                                '<button type="button" class="close" data-dismiss="alert">×</button>'+
                                '<p data-ng-bind="message"></p>'+
                            '</div>'+
                        '</div>',
			replace: true,
			scope: {
				type: "@",
				message: "@",
			},
			link: function($scope, element, attrs) {
				var timeout = 	$scope.type === 'alert-success' ? successTime :
								$scope.type === 'alert-info' ? infoTime :
								$scope.type === 'alert-warning' ? warningTime :
								errorTime;

				$timeout(function() {
					$(element).fadeOut(2000, function() {
						$(element).remove();
					});
				}, timeout);
			}
		};
	};

	module.directive('notification', ["$timeout", Notification]);
});