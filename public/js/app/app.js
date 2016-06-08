;(function(){
	angular
		.module('App', [
			'ngRoute',
			'App.Common',
			'App.Home',
			'App.Notes',
			'App.Gallery'
		])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'js/app/home/tmpl/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'home'
			})
			.when('/notes', {
				templateUrl: 'js/app/notes/tmpl/notes.html',
				controller: 'NotesCtrl',
				controllerAs: 'notes'
			})
			.when('/gallery', {
				templateUrl: 'js/app/gallery/tmpl/gallery.html',
				controller: 'GalleryCtrl',
				controllerAs: 'gallery'
			})
			.otherwise({
				redirectTo: '/'
			});
		}])
		.run(['$rootScope', '$location', function($rootScope, $location) {

			var routeChangeSuccess = function(e, route) {
				var $curr = $('#nav-' + route.originalPath.substr(1));

				$('#nav').children().each(function(i, e) {
					$(e).removeClass('active');
				});

				$curr.addClass('active');
			};

			$rootScope.$on('$routeChangeSuccess', routeChangeSuccess);
		}]);
})();