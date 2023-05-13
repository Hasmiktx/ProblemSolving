const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Iterative solution
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    }
  }
  return -1;
}
// Recursive solution
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      return binarySearch(arr, target, mid + 1, right);
    } else if (target < arr[mid]) {
      return binarySearch(arr, target, left, mid - 1);
    }
  } else {
    return -1;
  }
}
console.log(binarySearch(array, 2));
