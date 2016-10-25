	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/sobre', {
				templateUrl : 'pages/sobre.html',
				controller  : 'sobreController'
			})
			// route for the contact page
			.when('/analise', {
				templateUrl : 'pages/analise.html',
				controller  : 'analiseController'
			})
			// route for the contact page
			.when('/contato', {
				templateUrl : 'pages/contato.html',
				controller  : 'contatoController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('sobreController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

    scotchApp.controller('analiseController', function($scope) {
        $scope.message = 'Analise.';
    });

	scotchApp.controller('contatoController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});