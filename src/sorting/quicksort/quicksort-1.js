/*!
 * Quicksort - Sorting algorithm (http://en.wikipedia.org/wiki/Quicksort)
 *
 * Simple version
 */

'use strict';

function quickSort(arr) {
  var len = arr.length;
  var lenMiddle;
  var less;
  var greater;
  var pivot;
  var i;

  if (len < 1) {
    return arr;
  }

  lenMiddle = (len % 2 === 0) ? (len / 2) - 1 : Math.floor(len / 2);
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
}

module.exports = quickSort;
