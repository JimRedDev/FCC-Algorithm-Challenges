/* Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr, newArr = []) {
  
    for(let i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i])) {
        newArr.push(arr[i]);
      } else {
        steamrollArray(arr[i], newArr);
      }
    }
  
    return newArr;
  }
  
  steamrollArray([1, {}, [3, [[4]]]]);
  