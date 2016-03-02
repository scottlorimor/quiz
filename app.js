var app = angular.module('quizApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'components/home/homeview.html',
            controller: 'homeCtrl',
            resolve: {
				quizList: function(quizService) {
					return quizService.getQuizNames();
				}
			}
        })


    $urlRouterProvider
        .otherwise('/');
});