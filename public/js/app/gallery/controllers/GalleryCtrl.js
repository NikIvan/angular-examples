;(function(){
	angular
		.module('App.Gallery')
		.controller('GalleryCtrl', ['GalleryService', '$q', function(GalleryService, $q) {
			var vm = this;

			vm.data = GalleryService.getImages();

			vm.loadImages = function() {
				console.log('GalleryCtrl: loadImages');
				
				var deferred = $q.defer();
				
				GalleryService.loadImages().then(function(response) {
					vm.data = vm.data.concat(response.data);
					deferred.resolve();
				});

				return deferred.promise;
			};

			vm.loadImagesVavel = function(options) {
				console.log('GallleryCtrl: loadImagesVavel');

				var deferred = $q.defer();
				
				GalleryService.loadImagesVavel(options).then(function(response) {
					vm.data = vm.data.concat(response.data);
					deferred.resolve();
				});

				return deferred.promise;
			};
		}]);
})();