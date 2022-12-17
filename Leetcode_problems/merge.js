/*You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order. */

/* Time complexity O(n +m)*/

let merge = function (nums1, m, nums2, n) {
  let nums1Indx = m - 1;
  let nums2Indx = n - 1;
  for (let i = nums1.length - 1; i >= 0; i++) {
    if (nums1[nums1Indx] >= nums2[nums2Indx]) {
      nums1[i] = nums1[nums1Indx];
      nums1Indx--;
    } else if (nums2Indx >= 0) {
      nums1[i] = nums2[nums2Indx];
      nums2Indx--;
    }
  }
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
