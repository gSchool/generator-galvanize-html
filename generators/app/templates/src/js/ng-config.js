(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig() {}

})();
