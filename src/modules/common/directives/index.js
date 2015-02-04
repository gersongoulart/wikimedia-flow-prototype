'use strict';

module.exports =
  angular.module('SimplySocial.common.directives', [])
    .directive('fieldText', require('./fieldTextDirective'))
    .directive('topic', require('./topicDirective'));
