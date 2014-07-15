(function () {


	'use strict';


	angular.module('testScenarios', ['delegateEvent']);


	angular.module('testScenarios').controller('Scenarios', function ($scope) {

		$scope.onClickHandler = function () {
			$scope.onClickOutput = 'on-click';
		};

		$scope.dataOnClickHandler = function () {
			$scope.dataOnClickOutput = 'data-on-click';
		};

		$scope.onFocusHandler = function () {
			$scope.onFocusOutput = 'on-focus';
		};

		$scope.nestedOnClickHandler = function () {
			$scope.nestedOnClickOutput = 'nested on-click';
		};

		$scope.nestedOnFocusinHandler = function () {
			$scope.nestedOnFocusinOutput = 'nested on-focusin';
		};

		$scope.nestedOnFocusinWithFilterHandler = function () {
			$scope.nestedOnFocusinWithFilterOutput = 'nested on-focusin with filter';
		};

	});


})();
