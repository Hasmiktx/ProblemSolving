//const nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

//const nums = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]

/*       Solution 1                */

function productExceptSelf(arr) {
  const productArr = []; //1

  for (let i = 0; i < arr.length; i++) {
    //O(n)
    const arrCopy = [...arr]; //O(n)
    arrCopy.splice(i, 1); //O(n)
    newEl = arrCopy.reduce((aggr, el) => aggr * el); // O(n^2) ??
    productArr.push(newEl); //O(n)
  }
  return productArr;
}
console.log(productExceptSelf(nums));

/*       Solution  2               */

function productExceptSelf(arr) {
  const productArr = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        product *= arr[j];
      }
    }
    productArr.push(product);
  }
  return productArr;
}
console.log(productExceptSelf(nums));
