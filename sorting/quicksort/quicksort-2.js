/*!
 * Quicksort - Sorting algorithm (http://en.wikipedia.org/wiki/Quicksort)
 *
 * In-place version
 */

var swapArrayValues = function (arr, from, to) {
  'use strict';

  var temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;

  return arr;
};

var partition = function (arr, left, right, pivotIndex) {
  'use strict';

  var pivotValue = arr[pivotIndex],
    storeIndex,
    i;

  swapArrayValues(arr, pivotIndex, right);
  storeIndex = left;

  for (i = left; i < right; i += 1) {
    if (arr[i] < pivotValue) {
      swapArrayValues(arr, i, storeIndex);
      storeIndex += 1;
    }
  }

  swapArrayValues(arr, storeIndex, right);

  return storeIndex;
};

var quickSort = function (arr, left, right) {
  'use strict';

  var pivotIndex,
    pivotNewIndex;

  if (left < right) {

    pivotIndex = right % 2 === 0 ? (right / 2) - 1 : Math.floor(right / 2);

    // Generate random pivot if not(left < pivot < right)
    while (left > pivotIndex || pivotIndex > right) {
      pivotIndex = Math.ceil(Math.random() * right);
    }

    pivotNewIndex = partition(arr, left, right, pivotIndex);

    quickSort(arr, left, pivotNewIndex - 1);

    quickSort(arr, pivotNewIndex + 1, right);
  }

  return arr;
};
