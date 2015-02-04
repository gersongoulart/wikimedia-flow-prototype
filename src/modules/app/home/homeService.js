'use strict';

module.exports = /*@ngInject*/
  function homeService($q, $http) {
    var topics;
    var service = {
      init : init
    };

    function init() {
      var d = $q.defer();

      $http.get('/discussion.json')
        .then(function(response){
          return processTopics(response.data.topics);
        })
        .then(function(topics){
          d.resolve(topics);
        });

      return d.promise;
    }

    function processTopics(topics) {
      var processedTopics = [];

      for ( var i = 0, len = topics.length; i < len; i++ ) {
        var topic = topics[i];

        topic.responseCount = topic.responses.length;
        topic.responses = processResponses(topic);
        processedTopics.push(topic);
      }

      return processedTopics;
    }

    function processResponses(topic) {
      if ( !topic || !topic.responses ) {
        return topic;
      }

      var responses = topic.responses;
      var responsesMap = {};
      var responsesRoot = [];
      var i, len, index, response;

      // Map all responses for quick lookup.
      for ( i = 0, len = responses.length; i < len; i++ ) {
        response = responses[i];

        // Create/reset nested responses.
        response.responses = [];
        responsesMap[ response.id ] = response;
      }

      // Nest all responses.
      for ( index in responsesMap ) {
        if ( responsesMap.hasOwnProperty(index) ) {
          response = responsesMap[index];
          var parent = responsesMap[ response.parentid ];

          if ( parent ) {
            parent.responseCount = (parent.responses.length || 0) + 1;
            parent.responses.push(response);
            continue;
          }

          responsesRoot.push(response);
        }
      }

      // Return all top-level responses.
      return responsesRoot;
    }

    return service;
  };
