/*Given a non-empty array of integers nums, every element appears twice except for one.
 Find that single one.

You must implement a solution with a linear runtime complexity 
and use only constant extra space.



Input: nums = [2,2,1]
Output: 1



Input: nums = [4,1,2,1,2]
Output: 4



Input: nums = [1]
Output: 1
*/

/* Time complexity of this solution is O(n2) */

let singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let singleCount = 0;
    for (let j = 0; i < nums.length; j++) {
      if (nums[i] === nums[j]) {
        singleCount++;
      }
    }
    if (singleCount === 1) {
      return nums[i];
    }
  }
};

/* Time complexity of this solution is O(n) */

function singleNumber(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

/* Time complexity of this solution is O(n) */
function singleNumber(nums) {
  let num;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
}
