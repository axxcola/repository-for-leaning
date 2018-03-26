var myModule = angular.module('MyModule', []);
myModule.directive('superman', function () {
    return {
        scope: {},  //独立的作用域
        restrict: "AE",
        controller: function ($scope) { //方法暴露给外界去调用
            $scope.abilities = ['test'];
            this.addStrength = function () {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function () {
                $scope.abilities.push("speed");
            };
            this.addLight = function () {
                $scope.abilities.push("light");
            }
        },
        link: function (scope, elememt, attrs) {    //link处理内部事件
            elememt.addClass('btn, btn-primary');
            elememt.bind("mouseenter", function () {
                console.log(scope.abilities);
            });
        }
    }
});
myModule.directive("strength", function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, supermanCtrl) {
            //angular js 会把superman controller自动注射到supermanCtrl中，通过这个去调用superman控制器里面暴露出的一些方法
            supermanCtrl.addStrength();
        }
    }
});
myModule.directive("speed", function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, superCtrl) {
            superCtrl.addSpeed();
        }
    }
});
myModule.directive("light", function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, superCtrl) {
            superCtrl.addLight();
        }
    }
});