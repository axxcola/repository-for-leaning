var myModule = angular.module('MyModule', []);
myModule.controller('MyCtrl', function ($scope) {
    $scope.flavor = '百威';
});
myModule.directive("drink", function () {
    return {
        restrict: "AE",
        template: "<div>{{flavor}}</div>",
        link: function (scope, element, attrs) {
            scope.flavor = attrs.flavor;
        }
    }
});