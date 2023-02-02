//given an array of integers, sort the array
//in each loop, the highest number goes to the top

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [-6, 20, 8, -2, 4];

bubbleSort(arr);
console.log(arr);

//Big-O: O(n^2)
