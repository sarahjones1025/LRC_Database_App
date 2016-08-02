lrcApp.controller('indexController', function($scope) {
});


lrcApp.controller('mainController', function($scope) {
});


lrcApp.controller('childController', function($scope) {
});


lrcApp.controller('DropdownCtrl', function ($scope, $log) {
  // $scope.items = [
  //   'The first choice!',
  //   'And another choice for you.',
  //   'but wait! A third!'
  // ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});


lrcApp.controller('agsController', function($scope) {
	
	// $scope.contents     = $('.contents');
	// $scope.toggleButton = $('.toggle_button');
	// $scope.listExpander = $scope.toggleButton.parent();
	// $scope.listSelector = $scope.contents.data( 'contents' );

	// $scope.message      = "Hello, there";

	// $scope.$on('$viewContentLoaded', function() {
	// 	$scope.contents.hide();

	// });

	// $scope.showMe1 = false;

	// $scope.showHide = function() {
	// 	console.log( $scope.message );

	// 	$scope.showMe1 = !$scope.showMe1;

	// 	$scope.listExpander.toggleClass('active');

	// 	$scope.listSelector.fadeToggle( 100 );

	// 	$scope.contents.not($scope.listSelector).hide();

		

	// };

	// $scope.showMe2 = false;

	// $scope.showHide2 = function() {
	// 	console.log( $scope.message );
	// 	$scope.showMe2 = !$scope.showMe2;

	// };

	// $scope.showMe3 = false;

	// $scope.showHide3 = function() {
	// 	console.log( $scope.message );
	// 	$scope.showMe3 = !$scope.showMe3;

	// };

	// $scope.showMe3 = false;

	// $scope.showHide4 = function() {
	// 	console.log( $scope.message );
	// 	$scope.showMe4 = !$scope.showMe4;

	// };

	// $scope.showMe5 = false;

	// $scope.showHide5 = function() {
	// 	console.log( $scope.message );
	// 	$scope.showMe5 = !$scope.showMe5;

	// };

	// $scope.showMe6 = false;

	// $scope.showHide6 = function() {
	// 	console.log( $scope.message );
	// 	$scope.showMe6 = !$scope.showMe6;

	// };

	// $scope.showMe7 = false;

	// $scope.showHide7 = function() {
	// 	console.log( $scope.message );
	// 	$scope.showMe7 = !$scope.showMe7;

	// };

	// $scope.showMe8 = false;

	// $scope.showHide8 = function() {
	// 	console.log( $scope.message );
	// 	$scope.showMe8 = !$scope.showMe8;

	// };


 	


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