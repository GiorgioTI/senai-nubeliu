	// create the module and name it scotchApp
	var ColectApp = angular.module('ColectApp', ['ngRoute']);

	// configure our routes
	ColectApp.config(function($routeProvider) {
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
			})
            //rota da pagina de login
            .when('/login', {
				templateUrl : 'pages/login.html',
				controller  : 'loginController'
			})
            //rota da pagina home depois do login
            .when('/login-home', {
				templateUrl : 'pages/login-home.html',
				controller  : 'login-homeController'
			})
            //rota da pagina de manutenção das categorias
            .when('/categoria-mngm', {
				templateUrl : 'pages/categoria-mngm.html',
				controller  : 'categoria-mngmController'
			})
            //rota 
            .when('/categoria-create', {
				templateUrl : 'pages/categoria-create.html',
				controller  : 'categoria-createController'
			});
	});

	// create the controller and inject Angular's $scope
	ColectApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	ColectApp.controller('sobreController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

    ColectApp.controller('analiseController', function($scope) {
        $scope.message = 'Analise.';
    });

	ColectApp.controller('contatoController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});