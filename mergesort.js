function merge(a, b) {
  if (b.length > a.length) {
    let temp = a;
    a = b;
    b = temp;
  }
  const mergedArray = [];

  let i = 0;
  let j = 0;
  while (j < b.length) {
    if (a[i] /*a[i] == 1 */ <= b[j] /*b[j] == 4 */) {
      mergedArray.push(a[i]);
      i++;
    } else {
      mergedArray.push(b[j]);
      j++;
    }
  }
  mergedArray.push(...a.slice(i));

  return mergedArray;
}

function mergeSort(arr) {
  // let's start with the base case:
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length - 1 / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;

// Option 1: https://www.youtube.com/watch?v=xsmyLxbi-Kc

// function mergeSortTopDown(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   const middle = Math.floor(array.length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);

//   return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
// }

// function mergeTopDown(left, right) {
//   const array = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       array.push(left.shift());
//     } else {
//       array.push(right.shift());
//     }
//   }

//   return array.concat(left.slice()).concat(right.slice());
// }

// const testArray1 = [4, 5, 2, 1, 3, 8];
// console.log(mergeSortTopDown(testArray1));

// Option 2: my own version:

// console.log(merge(sortedArray1, sortedArray2));

// Great! Now that that function above is working, let's go ahead and write a function that will split an unsorted array into its individual components:
