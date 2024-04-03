var app = angular.module('todoApp', []);

app.controller('todoController', function($scope){
	$scope.tasks = [];

	var taskData = localStorage['tasksList'];
	if(taskData !== undefined){
		$scope.tasks = JSON.parse(taskData);
	}

	$scope.performOnEnter = function(){
		if(event.which == 13 && $scope.task != ""){
			$scope.addTask();
		}
	}

	$scope.submitTask = function(){
		if($scope.task != null){
			$scope.addTask();
		}
	}

	$scope.addTask = function(){
		$scope.tasks.push({'taskMessage':$scope.task, 'status':'false'});
		$scope.task = "";
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
	}

	$scope.editTask = function(editedTask){
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
		var editTaskIndex = (JSON.parse(localStorage['tasksList'])).map(function(e){ return e.taskMessage;}).indexOf(editedTask);
		$scope.tasks[editTaskIndex].taskMessage = event.target.innerText;
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
	}

	$scope.updateTask = function(updatedTask){
		if(event.which == 13){
			$scope.editTask(updatedTask);
		}
	}

	$scope.updateStatus = function(editedTask, updateStatus){
		var editTaskIndex = (JSON.parse(localStorage['tasksList'])).map(function(e){ return e.taskMessage;}).indexOf(editedTask);
		$scope.tasks[editTaskIndex].status = updateStatus;
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
	}
});