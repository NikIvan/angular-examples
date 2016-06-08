;(function(){
	angular
		.module('App.Home')
		.directive('myTabs', [function(){
			// Runs during compile
			return {
				scope: {}, // {} = isolate, true = child, false/undefined = no change
				controller: ['$scope', function($scope) {
					var vm = this;
					var panes = $scope.panes = [];

					$scope.select = function(pane) {
						angular.forEach(panes, function(pane) {
							pane.selected = false;
						});

						pane.selected = true;
					}

					vm.addPane = function(pane) {
						if(panes.length === 0) {
							$scope.select(pane);
						}

						panes.push(pane);
					}
				}],
				restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
				templateUrl: 'js/app/home/directives/myTabs.html',
				transclude: true
			};
		}]);
})();