'use strict';

angular.module('bookApp')
  .directive('contenteditable', function () {
    return {
      require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {

            // view -> model
            elm.bind('keydown keypress input', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

            // model -> view
            ctrl.$render = function() {
                elm.html(ctrl.$viewValue);
            };
        }
    };
  });