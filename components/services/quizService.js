app.service('quizService', ['$q', function($q){
	this.getQuizNames = function() {
		var defer = $q.defer();

		defer.resolve([{
			name: 'Angular'
		}, {
			name: 'HTML'
		}])

		return defer.promise;
	}
}])