/*   Longest Substring Without Repeating Characters
Medium    pass test 985/987  */

let lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;

    let arr=[];
    let res=[];
    
     for(let i=0;i<s.length;i++){
         res.push(arr);
          arr=[];
         arr.push(s[i]);
      for(let j=i+1;j<s.length;j++){
        if(arr.includes(s[j])){
         break;
        }else{
         arr.push(s[j])
        }
      }
     }
     const lengthArr= res.map(el=>{
         return el.length
     })
     return(Math.max(...lengthArr))
 }
 lengthOfLongestSubstring("pwwkew")


 /*
 var lengthOfLongestSubstring = function(s) {
  let output = 0;
  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (word.indexOf(s[j]) !== -1) break;
      else word += s[j]
    }
    output = Math.max(word.length, output);
  }
  return output;
};
 */