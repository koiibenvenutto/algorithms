// STEP 1: Compare the target value to the middle element of the array.
// STEP 2: If the target value is equal to the middle element, return the index.
// STEP 3: If the target value is less than the middle element, continue the search in the lower half of the array.
// STEP 4: If the target value is greater than the middle element, continue the search in the upper half of the array.
// STEP 5: If the lower bound exceeds the upper bound, the target is not in the array.

// So obviously we're taking advantage of the extra information that we get from having a pre sorted array. Let's make one of those to use:

const sortedeArr = [1, 4, 5, 6, 8, 9, 12, 34, 65, 79];

function binarySearch(array, target) {
  if (array.length < 2 && array[0] !== target) {
    console.log("The target is not in the array");
    return "target not in array";
  } else if (array.length < 2 && array[0] === target) {
    console.log("2");
    return array[0];
  }
  const middle = Math.floor(array.length / 2);

  if (target === array[middle]) {
    return middle;
  } else if (target < array[middle]) {
    return binarySearch(array.slice(0, middle), target);
  } else {
    return binarySearch(array.slice(middle), target);
  }
}

console.log(binarySearch(sortedeArr, 12));

// Okay so the next step is: If the lower bound exceeds the upper bound, the target is not in the array. What does this mean, I'm going to break this down.

// const testArr = [0];
// console.log(testArr.length);
// console.log(testArr[0]);

// Okay so now I have the first part working, it finds the element in the array. Now I see why they use upper and lower bounds. It allows you to know where the number is in the context of the original array when you find it.

// 111223_2029
// Okay so I just want to start fresh today and see if I can make this work.
