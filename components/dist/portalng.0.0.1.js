/*jshint strict:false */
'use strict';

/* portalng directive for wrapping app content */

angular.module('portalng.wrapper', ['templates-main']).
  directive('portalng', ['$http', function ($http) {
    return {
      restrict: "E",
      transclude: true,
      templateUrl:"wrapper/portalng.wrapper.tpl.html",
      // template:"<p>this is <div ng-transclude></div>a template</p>",
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

angular.module('templates-main', ['wrapper/portalng.wrapper.tpl.html']);

angular.module("wrapper/portalng.wrapper.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wrapper/portalng.wrapper.tpl.html",
    "<div>Angular Portal version {{apiVersion}}</div>\n" +
    "<a ng-repeat=\"app in apps\" ng-href=\"{{app.url}}\">|&nbsp;{{app.name}}&nbsp;|</a>\n" +
    "<hr/>\n" +
    "<div ng-transclude></div>\n" +
    "<hr/>\n" +
    "<div>©2014 Michael Dausmann</div>\n" +
    "</div>");
}]);
