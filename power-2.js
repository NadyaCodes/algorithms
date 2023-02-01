//determine if number is a power of 2 or not
//integer is a power of two if there is an integer 'x' such that 'n' === 2^x
//isPowerOfTwo(1) === true

//Version A
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

//Big-O = 0(log2)
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

//Version B
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

//Big-O = 0(1)
console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
