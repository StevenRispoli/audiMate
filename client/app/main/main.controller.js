'use strict';

angular.module('audiMateApp')
.controller('MainCtrl', function ($scope, $http) {
	var vm = this;
	vm.togglePlay = togglePlay;
	
	$scope.playPause = false;
	
	function togglePlay(playPause){
		$scope.playPause = !playPause;
		if($scope.playPause)
			$('#play-pause').html('&#9647&#9647').addClass('pause');
		else
			$('#play-pause').html('&#9655').removeClass('pause');
	}
});


// angular.module('audiMateApp')
//   .controller('MainCtrl', function ($scope, $http) {
//     $scope.awesomeThings = [];

//     $http.get('/api/things').success(function(awesomeThings) {
//       $scope.awesomeThings = awesomeThings;
//     });

//     $scope.addThing = function() {
//       if($scope.newThing === '') {
//         return;
//       }
//       $http.post('/api/things', { name: $scope.newThing });
//       $scope.newThing = '';
//     };

//     $scope.deleteThing = function(thing) {
//       $http.delete('/api/things/' + thing._id);
//     };
//   });
