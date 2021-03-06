'use strict';

module.exports =
  angular.module('SimplySocial', [
    'ui.router',
    'ngSanitize',
    'html5.placeholder',
    'yaru22.angular-timeago',
    'RecursionHelper',
    // html templates in $templateCache generated by Gulp:
    require('../../../tmp/templates').name,
    // useful directives, filters, services shared across the app
    require('../common').name,
    // app modules:
    require('./home').name
  ]);
