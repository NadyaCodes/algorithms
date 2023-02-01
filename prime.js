//determine if a number is prime or not
//prime is number greater than 1  that is not a product of two smaller natural numbers
//isPrime(5) = true
//isPrime(6) = false

//Version A
// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

//Big-0 = O(n)

//Version B - only need to search for numbers less than square root
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));

//Big-O = O(sqrt(n))
