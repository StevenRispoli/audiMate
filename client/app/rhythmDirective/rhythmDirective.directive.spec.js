'use strict';

describe('Directive: rhythmDirective', function () {

  // load the directive's module and view
  beforeEach(module('audiMateApp'));
  beforeEach(module('app/rhythmDirective/rhythmDirective.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rhythm-directive></rhythm-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the rhythmDirective directive');
  }));
});