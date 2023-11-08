function quicksort(arr) {
  if (arr.length <= 1) return arr;

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

  return [...quicksort(left), pivot, ...quicksort(right)];
}

const array = [3, 9, 0, 5, 1, 4, 5, 8, 8, 6];

for (i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 10));
  console.log(array);
}

console.log(quicksort(array));
