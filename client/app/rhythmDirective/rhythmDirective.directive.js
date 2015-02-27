'use strict';

angular.module('audiMateApp')
.directive('rhythmDirective', function () {
	return {
		templateUrl: 'app/rhythmDirective/rhythmDirective.html',
		restrict: 'E',
		link: function (scope, element, attrs) {
		}
	};
});