'use strict';

module.exports = /*@ngInject*/
  function homeController($scope, homeService) {

    homeService.init().then(function(data){
      return $scope.topics = data;
    });

  };
