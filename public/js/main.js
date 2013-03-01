var app = angular.module('tehdbApp', []);

app.factory('Data', function(){
	return {message: "data from service"}
});

app.filter('reverse', function(){
	return function(text) {
		return text.split('').reverse().join('');
	}
});


function controller1($scope, Data) {
	$scope.data = Data;
};

function controller2($scope, Data) {
	$scope.data = Data;
	$scope.reverseMessage = function( message) {
		return message.split('').reverse().join('');
	}
};
