/*You are given a sorted array consisting of only integers where every element
 appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space. */

//const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// Output: 2

// const nums = [3,3,7,7,10,11,11]
// Output: 10
function singleNonDuplicate(arr, left = 0, right = arr.length) {
  debugger;

  if (left === right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (mid % 2 === 0) {
    if (arr[mid] === arr[mid + 1]) {
      singleNonDuplicate(arr, (left = mid + 2), right);
    } else {
      singleNonDuplicate(arr, left, (right = mid));
    }
  } else {
    if (arr[mid] === arr[mid - 1]) {
      singleNonDuplicate(arr, (left = mid + 1), right);
    } else {
      singleNonDuplicate(arr, left, (right = mid - 1));
    }
  }

  return single;
}
console.log(singleNonDuplicate(nums));
