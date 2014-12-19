/*!
 * Bubble sort - Sorting algorithm (http://en.wikipedia.org/wiki/Bubble_sort)
 *
 * Optimization 2
 */

'use strict';

function swapArrayValues(array, from, to) {
  var temp = array[from];

  array[from] = array[to];
  array[to] = temp;

  return array;
}

function bubbleSort(array) {
  var index;
  var len;
  var newn;

  while (len !== 0) {
    newn = 0;

    for (index = 0, len = array.length; index < len - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        swapArrayValues(array, index, index + 1);
        newn = index + 1;
      }
    }

    len = newn;
  }

  return array;
}

module.exports = bubbleSort;
