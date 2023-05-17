/* Given a string s, return true if it is a palindrome, or false otherwise.*/

/*  
     Bad solution 
   Time complexity of this solution is O(n) 
   */

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

/*  
      Main Solution 
   Time complexity of this solution is O(n) 
   */

function isPalindrome(s) {
  const lowerCaseStr = s.toLowerCase();
  let strArr = [];
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (
      (lowerCaseStr.charCodeAt(i) >= 97 && lowerCaseStr.charCodeAt(i) <= 122) ||
      (lowerCaseStr.charCodeAt(i) >= 48 && lowerCaseStr.charCodeAt(i) <= 57)
    ) {
      strArr.push(lowerCaseStr[i]);
    }
  }

  let left = 0;
  let right = strArr.length - 1;
  while (left < right) {
    if (strArr[left] !== strArr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}



var isPalindrome = function(s) {
	const lowS= s.toLowerCase();
    let str="";
    for(let i =0;i<lowS.length;i++){
        if((lowS.charCodeAt(i)>=97 && lowS.charCodeAt(i)<=122)  ||
         (lowS.charCodeAt(i)>=48 && lowS.charCodeAt(i)<=57)){
          
            str+=lowS[i];
        }
    }
  for(let j=0;j<(str.length)/2;j++){
     if(str[j]!==str[str.length-1-j]){
         return false
     }
  }
  return true
};