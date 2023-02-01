//given an integer 'n', find the factorial of that integer
//factorial of a non-negative integer (n!) is the product of all posititive integers less than or equal to 'n'
//factorial of 0 is 1
//factorial(4) - 4*3*2*1 = 24

function factorial(n) {
  let finalNum = 1;
  for (let i = 2; i <= n; i++) {
    finalNum *= i;
  }
  return finalNum;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));

//Big-O = O(n)
