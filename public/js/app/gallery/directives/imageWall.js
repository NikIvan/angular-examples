;(function(){
	angular
	.module('App.Gallery')
	.directive('imageWall', ['$timeout', function($timeout){
		// Runs during compile
		return {
			scope: {
				data: '=',
				loadImages: '&'
			}, // {} = isolate, true = child, false/undefined = no change
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'js/app/gallery/directives/imageWall.html',
			replace: true,
			link: function($scope, element, attrs, controller) {
				var $el = $(element);

				$scope.isLoading = false;
				$scope.isFirstLoad = true;

				$scope.$watch('isLoading', function(newValue, oldValue) {
					console.log('isLoading: ' + oldValue + ' -> ' + newValue);
				});
				
				$scope.$on('repeatDone:ready', function(e) {
					e.stopPropagation();

					if(!$scope.isFirstLoad) {							
						$timeout(function() {
							$el.justifiedGallery('norewind');
						});
					} else {
						console.log('First load');
						$scope.isFirstLoad = false;

						var options = {
							rowHeight: 180,
							lastRow: 'nojustify',
							margins: 5,
							selector: '> div > a',
							captions: true
						};

						var setChildHeightAsParent = function($el) {
	                        var newHeight = $el.height();
	                        $el.children()[0].style.height = newHeight + 'px';
                    	}

						var onComplete = function(e) {
							setChildHeightAsParent($el);
							
							$scope.$apply(function() {
								$scope.isLoading = false;
							});
							
							console.log('JG: Completed');
						};

						var onResize = function(e) {
							setChildHeightAsParent($el);

							console.log('JG: Resized');
						};

						var onRowflush = function(e) {
							console.log('JG: Row ready');
						};

						var exec = function() {
							$el.justifiedGallery(options)
								.on('jg.complete', onComplete)
								.on('jg.resize', onResize)
								.on('jg.rowflush', onRowflush);
						};

						$timeout(exec);
					}
				});

				$scope.handleScroll = function() {
					console.log('------------- handleScroll called --------------');
					$scope.isLoading = true;

					$scope.loadImages().then(function() {
						console.log('handleScroll: loaded');
					});

					// options = {
					// 	skip: $scope.data.length
					// };

					// $scope.loadVavel({
					// 	options: options
					// }).then(function() {
					// 	console.log('handleScroll: loaded');
					// });
				};

				$scope.handleScroll();
			}
		};
	}]);
})();