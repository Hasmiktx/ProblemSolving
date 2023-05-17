function merge(arr1,arr2){
    
    let sortedArr=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            sortedArr.push(arr1[i]);
            i++
        }else if(arr1[i]===arr2[j]){
            sortedArr.push(arr1[i]);
            sortedArr.push(arr2[j]);
            i++;
            j++;
        }
        else{
            sortedArr.push(arr2[j]);
            j++
        }
    }
    return sortedArr
}

function mergeSort(arr){
    
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let rigth=arr.slice(mid);
    
    merge(mergeSort(left),mergeSort(rigth))
}
mergeSort([5,1,1,2,0,0])




/*             more understandable solution                */

var  merge = function(left,right){

    let res =[];
    let i=0, j=0;
      while(i<left.length && j < right.length){
          if(left[i]<= right[j]){
              res.push(left[i]);
              i++
          }else{
              res.push(right[j]);
              j++
          }
      }
      while(i<left.length){
          res.push(left[i]);
          i++
      }
      while(j<right.length){
          res.push(right[j]);
          j++
      }
      return res
   }



   var sortArray = function(unSortArr) {
       if(unSortArr.length <= 1){
           return unSortArr;
       }
       let mid = Math.floor(unSortArr.length/2);
       let left = sortArray(unSortArr.slice(0,mid));
       let right=sortArray(unSortArr.slice(mid));
       return merge(left,right)
       
   };
