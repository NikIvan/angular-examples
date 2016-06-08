;(function(){
	angular
	.module('App.Gallery')
	.directive('repeatDone', [function() {
		return {
			restrict: 'A',
			link: function ($scope, element, attrs) {
				 if($scope.$last) {
				 	$scope.$emit('repeatDone:ready');
				 }
			}
		};
	}]);
})();