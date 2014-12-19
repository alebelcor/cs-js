'use strict';

var expect = require('chai').expect;

var quickSort = require('../../../src/sorting/quicksort/quicksort-1.js');

describe('quicksort (1)', function () {

  it('should sort an array', function () {
    expect(quickSort([1, 9, 83, 24, 6, 73, 42, 4])).to.deep.equal([1, 4, 6, 9, 24, 42, 73, 83]);
    expect(quickSort([12, 88, 33, 44, 60, 4, 71, 79])).to.deep.equal([4, 12, 33, 44, 60, 71, 79, 88]);
  });

});
