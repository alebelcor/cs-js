/*!
 * Bubble sort - Sorting algorithm (http://en.wikipedia.org/wiki/Bubble_sort)
 *
 * Optimization 1
 */

'use strict';

function swapArrayValues(array, from, to) {
  var temp = array[from];

  array[from] = array[to];
  array[to] = temp;

  return array;
}

function bubbleSort(array) {
  var swapped = true;
  var index;
  var len;

  while (swapped) {
    swapped = false;

    for (index = 0, len = array.length; index < len - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        swapArrayValues(array, index, index + 1);
        swapped = true;
      }
    }

    len -= 1;
  }

  return array;
}

module.exports = bubbleSort;
