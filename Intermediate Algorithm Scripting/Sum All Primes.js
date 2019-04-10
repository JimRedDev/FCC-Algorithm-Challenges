/* Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime. */

function sumPrimes(num) {
    let result = 0;
    for(let i = 1; i <= num; i++) {
      if(i > 1 && isPrime(i)) {
        result += i;
      }
    }
    return result;
  }
  
  function isPrime(x) {
    let result = true;
    for(let i = 2; i < x; i++) {
      if(x % i === 0){
        result = false;
      }
    }
    return result;
  }
  
  sumPrimes(977);