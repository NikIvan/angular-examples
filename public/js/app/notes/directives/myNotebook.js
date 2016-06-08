;(function(){
	angular
	.module('App.Notes')
	.directive('myNotebook', [function(){
		// Runs during compile
		return {
			scope: {
				notes: '=',
				ondelete: '&'
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope) {
				$scope.deleteNote = function(id) {
					$scope.ondelete({id: id});
				}
			},
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'js/app/notes/directives/myNotebook.html',
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);
})();