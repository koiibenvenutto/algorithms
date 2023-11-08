// My first quicksort algorithm

const arr = [7, 0, 3, 6, 7, 9, 6, 6, 3];

// console.log(arr[arr.length - 1]);

function quicksort(arr) {
  let sortedArr = [];

  function helper(arr) {
    // the first step is to assign a pivot
    let pivot = arr[arr.length - 1];
    // console.log(pivot);

    //   Next we need to set up our indices: j and j
    let i = -1;
    for (j = 0; j < arr.length; j++) {
      // check if j is less than the pivot, if it is, then we need to move j up by one and then swap the positions of j and j using the temp variable

      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // console.log(arr);
      }
    }
    // Next we will need to move the pivot (3 in this case) to the right of wherever i landed
    // The best thing to do here is actually to slice it off the end and insert it rather than having to change all the other elements around.
    i++;
    arr.splice(i, 0, pivot);
    arr.pop();

    // Then we will split the array into two pieces on the left and right of the pivot but not including it and feed those slices into the quick sort algorithm recursively...
    let left = arr.slice(0, i);
    let right = arr.slice(i + 1);
    // console.log(arr[i]);
    // console.log(left);
    // console.log(right);

    sortedArr.push(arr[i]);
    helper();
    // return [left, right, arr[i], i];
  }
  helper(arr);

  console.log(sortedArr);

  // I just want to make sure that I'm understanding everything regarding keeping track of the places that homie mentioned in the youtube video:
  // https://www.youtube.com/watch?v=Vtckgz38QHs
}

quicksort(arr);

// Just testing that this works:
// console.log(arr);
// arr[2] = 100;
// console.log(arr);
