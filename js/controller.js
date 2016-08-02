lrcApp.controller('indexController', function($scope) {
});

lrcApp.controller('mainController', function($scope) {
});

lrcApp.controller('childController', function($scope) {
});

lrcApp.controller('agsController', function($scope) {
	
	$scope.$on('$viewContentLoaded', function() {
		$('.contents').hide();
	});

});

lrcApp.controller('fmsController', function($scope) {

	$scope.$on('$viewContentLoaded', function() {
		$('.contents').hide();
	});

});

lrcApp.controller('ncoaController', function($scope) {

	$scope.$on('$viewContentLoaded', function() {
		$('.contents').hide();
	});

});