app.controller('homeCtrl', ['$scope', 'quizList', function($scope, quizList){
	// $scope.test = "hello";

	// console.log(pastQuizList);
	$scope.quizzes = quizList;	
	console.log(quizList);	
}])

// app.controller('homeCtrl', ['$scope', function($scope){
// 	// $scope.test = "hello";
// 	// console.log(quizList);
// 	// // console.log(pastQuizList);
// 	// $scope.quizzes = quizList;	
// }])