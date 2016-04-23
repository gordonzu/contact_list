

var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
	
	var refresh = function () {	
		$http.get('/contacts').success(function (response) {
			$scope.contactList = response;
			$scope.contact = "";
		});
	};

	refresh();
	
	$scope.addContact = function() {
			$http.post('/contacts', $scope.contact).success(function (response) {
				refresh();
			});
		};

	$scope.remove = function(id) {
		$http.delete('/contacts/' + id).success(function(response) {
			refresh();
		});
	};

	$scope.edit = function(id) {
		$http.get('/contacts/' + id).success(function(response) {
			console.log(id);
			$scope.contact = response;
		});
	};

  $scope.update = function () {
    console.log($scope.contact._id);
    $http.put('/contacts/' + $scope.contact._id, $scope.contact).success(function (response) {
      refresh();
    });
  };

  $scope.deselect = function () {
    $scope.contact = "";
  };
}]);




















