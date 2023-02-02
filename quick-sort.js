//given an array of integers, sort the array
//in each loop, the highest number goes to the top

function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-6, 20, 8, -2, 4];

console.log(quickSort(arr));

//Big-O: O(n^2)
//average - O(nlogn)
