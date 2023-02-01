//break down larger problem into smaller problem
//identify base case
//find the nth element of the Fibonacci sequence

function recursiveFib(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFib(n - 1) + recursiveFib(n - 2);
}
console.log(recursiveFib(1));
console.log(recursiveFib(2));
console.log(recursiveFib(5));
console.log(recursiveFib(6));

//Big-0 = 0(2^n)
