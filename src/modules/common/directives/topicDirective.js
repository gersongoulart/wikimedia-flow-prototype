'use strict';

module.exports = /*@ngInject*/
  function topicDirective() {
    return {
      restrict: 'A',
      scope: '=',
      controller: function($scope) {
        $scope.toggleReplies = function(){
          $scope.topic.showResponses = !$scope.topic.showResponses;
        };
      }
    };
  };
