'use strict';

angular.module('audiMateApp')
.controller('MainCtrl', function ($scope, $http) {
	var vm = this;
	vm.togglePlay = togglePlay;

	$scope.playPause = false;
	$scope.keyIsOpen = false;
	$scope.octaveIsOpen = false;
	$scope.typeIsOpen = false;
	$scope.keys = ['A','A#','B','C','C#/D\u266D','D','D#/E\u266D','E','F','F#','G','G#/A\u266D'];
	$scope.octaves = [1,2,3,4,5,6,7];
	$scope.types = ["sine", "square", "sawtooth", "triangle"];

	function togglePlay(playPause){
		$scope.playPause = !playPause;
		if($scope.playPause)
			$('#play-pause').html('&#9647&#9647').addClass('pause').removeClass('play');
		else
			$('#play-pause').html('&#9655').addClass('play').removeClass('pause');
	}

	function selectKey(key){

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
