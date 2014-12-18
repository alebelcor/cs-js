/*!
 * Quicksort - Sorting algorithm (http://en.wikipedia.org/wiki/Quicksort)
 *
 * Simple version
 */

var quickSort = function (arr) {
  'use strict';

  var len = arr.length,
    lenMiddle,
    less,
    greater,
    pivot,
    i;

  if (len < 1) {
    return arr;
  }

  lenMiddle = len % 2 === 0 ? (len / 2) - 1 : Math.floor(len / 2);
  pivot = arr.splice(lenMiddle, 1);

  less = [];
  greater = [];

  for (i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return Array.prototype.concat(quickSort(less), pivot, quickSort(greater));
};
