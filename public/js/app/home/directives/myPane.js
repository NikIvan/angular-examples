;(function(){
	angular
		.module('App.Home')
		.directive('myPane', [function(){
			// Runs during compile
			return {
				scope: {
					title: '@'
				}, // {} = isolate, true = child, false/undefined = no change
				require: '^^myTabs', // Array = multiple requires, ? = optional, ^ = check parent elements
				restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
				templateUrl: 'js/app/home/directives/myPane.html',
				transclude: true,
				link: function($scope, iElm, iAttrs, tabsCtrl) {
					tabsCtrl.addPane($scope)
				}
			};
	}]);

})();