;(function(){
	angular
	.module('App.Notes')
	.directive('myNote', [function(){
		// Runs during compile
		return {
			scope: {
				delete: '&',
				note: '='
			}, // {} = isolate, true = child, false/undefined = no change
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			link: function($scope, element, attrs, controller) {
				var $el = $(element);

				$el.hide().fadeIn('slow');

				$('#thumbnails').sortable({
					placeholder: "ui-state-highlight",
					forcePlaceholderSize: true
				})
			}
		};
	}]);
})();