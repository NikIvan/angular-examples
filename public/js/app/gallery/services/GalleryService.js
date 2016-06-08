;(function(){
	angular
	.module('App.Gallery')
	.service('GalleryService', ['$http', '$q', '$log', function($http, $q, $log){
		var data = [
			{
				url: 'http://lorempixel.com/350/150',
				title: '350x150'
			},
			{
				url: 'http://lorempixel.com/200/200',
				title: '200x200'
			},
			{
				url: 'http://lorempixel.com/350/150',
				title: '350x150'
			},
			{
				url: 'http://lorempixel.com/200/175',
				title: '200x175'
			},
			{
				url: 'http://lorempixel.com/150/150',
				title: '150x150'
			},
			{
				url: 'http://lorempixel.com/220/80',
				title: '220x80'

			},
			{
				url: 'http://lorempixel.com/300/160',
				title: '300x160'
			},
			{
				url: 'http://lorempixel.com/200/150',
				title: '200x150'
			},
		];

		var getImages = function() {
			return angular.copy(data);
		};

		var loadImages = function() {
			var deferred = $q.defer();

			var request = {
				method: 'GET',
				url: '/images'
			};

			var success = function(response) {
				deferred.resolve({
					data: response.data
				});
			};

			var error = function(msg, code) {
				deferred.reject(msg);
				$log.error(msg, code);
			}

			$http(request).then(success, error);

			return deferred.promise;
		};

		var loadImagesVavel = function(options) {
			var deferred = $q.defer();

			var success = function(response) {
				deferred.resolve({
					data: response.data
				});
			};

			var error = function(msg, code) {
				deferred.reject(msg);
				$log.error(msg, code);
			}

			$http.jsonp('http://localhost:3000/api/articles?sort=-order_num&skip=' + options.skip + '&take=20&author=jonathanwalsh_').then(success, error);

			return deferred.promise;
		}

		return {
			getImages: getImages,
			loadImages: loadImages,
			loadImagesVavel: loadImagesVavel
		};
	}]);
})();