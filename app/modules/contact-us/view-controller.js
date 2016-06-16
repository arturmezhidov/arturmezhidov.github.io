(function () {

	'use strict';

	angular
		.module('aboutUs')
		.controller('contactusController', contactusController);

	contactusController.$inject = ['$scope', 'dataContext'];

	function contactusController($scope, dataContext) {

		$scope.send = function() {
			var data = {
				Name: $scope.name,
				Contacts: $scope.contacts,
				Message: $scope.feedbackMessage
			}
			dataContext.feedback.create(data, function (response) {
				$scope.name = '';
				$scope.contacts = '';
				$scope.feedbackMessage = '';
				alert('сообщение отправлно');
				console.log(response);
			}, function(e) {
				console.log(e);
			});
		}
	}

})();