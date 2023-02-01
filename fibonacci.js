//Given a number 'n', find the first 'n' elements of the Fibonacci sequence
//Fibonacci sequence is a sequence where each number is the sum of the two preceding ones, starting with 0 and 1
//fibonacci(2) = [0, 1]
//fibonacci(3) = [0, 1, 1]
//fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

const fibonacci = (n) => {
  const finalArray = [0, 1];
  for (let i = 2; i < n; i++) {
    finalArray[i] = finalArray[i - 1] + finalArray[i - 2];
  }
  return finalArray;
};

console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(18));

//Big-O = O(n)
