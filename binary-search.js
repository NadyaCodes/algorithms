//given a sorted array, and a target element, find the index of t

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middle = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middle]) {
      return middle;
    }
    if (target < arr[middle]) {
      rightIndex = middle - 1;
    } else {
      leftIndex = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 11));

//Big-O: O(logn)
