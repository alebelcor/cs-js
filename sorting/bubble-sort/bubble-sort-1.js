/*!
 * Bubble sort - Sorting algorithm (http://en.wikipedia.org/wiki/Bubble_sort)
 */

var swapArrayValues = function (arr, from, to) {
  'use strict';

  var temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;

  return arr;
};

var bubbleSort = function (arr) {
  'use strict';

  var swapped = true,
    len = arr.length,
    i;

  while (swapped) {
    swapped = false;

    for (i = 0; i < len - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swapArrayValues(arr, i, i + 1);
        swapped = true;
      }
    }
  }

  return arr;
};
