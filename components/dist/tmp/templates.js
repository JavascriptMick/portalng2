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
