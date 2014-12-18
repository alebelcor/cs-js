/*!
 * Bubble sort - Sorting algorithm (http://en.wikipedia.org/wiki/Bubble_sort)
 *
 * Optimization 2
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

  var len = arr.length,
    newn,
    i;

  while (len !== 0) {
    newn = 0;

    for (i = 0; i < len - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swapArrayValues(arr, i, i + 1);
        newn = i + 1;
      }
    }
    len = newn;
  }

  return arr;
};
