/* Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: s = "race a car"
Output: false

Example 3:

Input: s = " "
Output: true
*/
/* Time complexity of this solution is O(n) */

function isPalindrome(s) {
  if (s.length === 0) {
    return true;
  }

  const regex = /[A-Za-z0-9]/g;
  const str = s.match(regex).join("").toLowerCase();

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("race a car"));
