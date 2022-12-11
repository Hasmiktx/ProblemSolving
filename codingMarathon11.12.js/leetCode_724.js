// const nums = [1, 7, 3, 6, 5, 6];       //3
//const nums = [1, 2, 3];                 //- 1;
//const nums = [2, 1, -1];                //0

function pivotIndex(arr) {
  let leftSum = 0;

  let sumArr = arr.reduce((sum, num) => sum + num, 0);

  for (let i = 0; i < arr.length; i++) {
    let rightSum = sumArr - arr[i] - leftSum;

    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}
console.log(pivotIndex(nums));
