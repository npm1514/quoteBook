var app = angular.module("quoteBook");
app.controller("mainCtrl", function($scope, dataService) {
		

		$scope.getQuotes = function() {
			$scope.verses = dataService.getData();
		};

		$scope.getQuotes();

		$scope.addQuotes = function(adder) {
			$scope.verses = dataService.addData(adder);
			console.log($scope.verses);
		};

		// $scope.removeQuotes = function(remover) {
		// 	$scope.verses = dataService.removeData(remover);
		// };

});