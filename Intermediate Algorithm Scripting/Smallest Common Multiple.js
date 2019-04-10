/* Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
    arr.sort((n, m) => {
      return n - m;
    });
    
    const a = arr[0];
    const b = arr[1];
    let x = b;
    let temp = [];
  
    for(let i = a; i <= b; i++ ){
      temp.push(i);
    }
  
    while(true) {
      if(check(x, temp)) {
        return x;
      }else {
        x = x+b;
      }
    }
  
  }
  
  function check(y, arr2) {
    return arr2.every(z => y%z == 0);
  }
  
  
  smallestCommons([2, 10]);