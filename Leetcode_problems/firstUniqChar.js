/*Given a string s, find the first non-repeating character in it and return its index.
 If it does not exist, return -1.

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1 
*/

/* Time complexity of this solution is O(n^2) */

let firstUniqChar = function (s) {
  let single;
  for (let i = 0; i < s.length; i++) {
    single = 0;

    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        single += 1;
      }
    }
    if (single === 1) {
      return i;
    }
  }
  return -1;
};

/* Time complexity of this solution is O(n) */

function firstUniqChar(s) {
  const charA = 97;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr[s.charCodeAt(i) - charA]) {
      arr[s.charCodeAt(i) - charA]++;
    } else {
      arr[s.charCodeAt(i) - charA] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (arr[s.charCodeAt(i) - charA] === 1) {
      return i;
    }
  }
  return -1;
}
