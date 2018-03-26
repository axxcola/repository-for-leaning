var myModule = angular.module('MyModule', []);
myModule.controller('MyCtrl', function ($scope) {
    $scope.ctrlFlavor = '百威';
});
myModule.directive("drink", function () {
    return {
        restrict: "E",
        //1
        // scope: {
        //     flavor: '@'  //只传递字符串
        // },
        // template: "<div>{{flavor}}</div>"
        // link: function (scope, element, attrs) {
        //     scope.flavor = attrs.flavor;
        // }

        //2
        scope: {
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor" />'
    }
});