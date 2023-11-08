// My first quicksort algorithm

const arr = [7, 0, 3, 6, 7, 9, 6, 6, 3];

function quicksort(arr, beginning, end) {
  let pivot = arr[arr.length - 1];

  let i = -1;
  for (j = 0; j < arr.length; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  arr.splice(i, 0, pivot);
  arr.pop();

  return i;
}

quicksort(arr, 0, arr.length - 1);

// Just testing that this works:
// console.log(arr);
// arr[2] = 100;
// console.log(arr);

