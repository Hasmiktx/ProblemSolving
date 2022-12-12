//const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// Output: 2

// const nums = [3,3,7,7,10,11,11]
// Output: 10
function singleNonDuplicate(arr, left = 0, rigth = arr.length) {
  debugger;
  let single;
  if (left === rigth) {
    single = -1;
  }
  let mid = Math.floor((left + rigth) / 2);
  if (arr[mid] === arr[mid - 1]) {
    if (rigth - 2 >= 0) {
      singleNonDuplicate(arr, left, (rigth = mid - 2));
    }
  } else if (arr[mid] === arr[mid + 1]) {
    if (left + 2 <= arr.length) {
      singleNonDuplicate(arr, (left = mid + 2), rigth);
    }
  } else {
    single = arr[mid];
  }
  return single;
}
console.log(singleNonDuplicate(nums));
