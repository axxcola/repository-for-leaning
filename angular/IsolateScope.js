var myModule = angular.module('MyModule', []);
myModule.directive('hello', function () {
    return {
        restrict: 'AE',
        scope:{},   //添加了一个独立的scope，username互相不影响，每个指令都有一个独立的scope空间
        template: '<div><input type="text" ng-model="username" />{{username}}</div>',
        replace: true
    }
});