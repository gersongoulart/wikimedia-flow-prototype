'use strict';

module.exports = /*@ngInject*/
  function secondsAgo() {
    var MS_PER_SECOND = 1000;

    return function(text, target) {
      var now = new Date();
      var seconds = parseInt(text, 10);

      if ( typeof seconds !== 'number' ) {
        return text;
      }

      return (new Date(now - seconds * MS_PER_SECOND)).getTime();
  };
};
