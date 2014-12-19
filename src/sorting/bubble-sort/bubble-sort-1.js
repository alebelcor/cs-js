/*!
 * Bubble sort - Sorting algorithm (http://en.wikipedia.org/wiki/Bubble_sort)
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

  while (swapped) {
    swapped = false;

    array.forEach(function (item, index, array) {
      if (item > array[index + 1]) {
        swapArrayValues(array, index, index + 1);
        swapped = true;
      }
    });
  }

  return array;
}

module.exports = bubbleSort;
