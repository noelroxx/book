'use strict';

describe('Directive: contenteditable', function () {
  beforeEach(module('bookApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<contenteditable></contenteditable>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the contenteditable directive');
  }));
});
