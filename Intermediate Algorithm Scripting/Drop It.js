/* Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
    
    while(true) {
      if(arr.length === 0) { return []; }
      let x = arr[0];
      if(func(x)){
        return arr;
      }else {
        arr.shift();
      }
    }
    
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n > 5; });