/*jshint strict:false */
'use strict';

/* portalng directive for wrapping app content */

angular.module('portalng.wrapper', ['templates-main']).
  directive('portalng', ['$http', function ($http) {
    return {
      restrict: "E",
      transclude: true,
      templateUrl:"wrapper/portalng.wrapper.tpl.html",
      scope:{},
      link: function(scope, iElement, iAttrs){
        scope.apiVersion = "1.0";
        scope.apps = [{name: 'loading apps...',url: '#'}]
        $http.get(iAttrs.portalUrl + "/api/" + scope.apiVersion + "/applet").success(function(data){
          scope.apps = data;
        }).error(function(){
          scope.apps = [{name: 'portal unavailable...',url: '#'}]
          return;
        });      
      }
    };
  }]).
  config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);
