'use strict';

var expect = require('chai').expect;

var bubbleSort = require('../../../src/sorting/bubble-sort/bubble-sort-3.js');

describe('bubble sort (3)', function () {

  it('should sort an array', function () {
    expect(bubbleSort([1, 9, 83, 24, 6, 73, 42, 4])).to.deep.equal([1, 4, 6, 9, 24, 42, 73, 83]);
    expect(bubbleSort([12, 88, 33, 44, 60, 4, 71, 79])).to.deep.equal([4, 12, 33, 44, 60, 71, 79, 88]);
  });

});
