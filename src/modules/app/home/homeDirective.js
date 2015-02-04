'use strict';

module.exports = /*@ngInject*/
  function homeDirective(RecursionHelper) {

    return {
        restrict: 'E',
        scope: { response: '=' },
        templateUrl: 'app/home/response.html',
        compile: function(element) {
            return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
                // Define your normal link function here.
                // Alternative: instead of passing a function,
                // you can also pass an object with
                // a 'pre'- and 'post'-link function.
            });
        }
    };

  };
