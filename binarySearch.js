function binarySearch(array, target, globalPosition = 0) {
  // Base case:
  if (array.length < 2 && array[0] !== target) {
    return "target not in array";
  } else if (array.length < 2 && array[0] === target) {
    return globalPosition;
  }

  // Middle:
  let middle = Math.floor((array.length - 1) / 2);

  // Here's an array to store the locations of the target number/s:
  // The recursive part:
  if (target === array[middle]) {
    const locations = [];
    // Move down until the first instance of the target is found:
    let j = middle;
    while (array[j - 1] === target) {
      j--;
    }
    // Move up and add them all to the locations array:
    while (array[j] === target) {
      locations.push(globalPosition + j);
      j++;
    }
    return locations;
  } else if (target < array[middle]) {
    return binarySearch(array.slice(0, middle), target, globalPosition);
  } else {
    return binarySearch(
      array.slice(middle + 1),
      target,
      globalPosition + middle + 1
    );
  }
}

console.log(binarySearch(longArray, 9964));

module.exports = binarySearch;

// Okay so the next step is: If the lower bound exceeds the upper bound, the target is not in the array. What does this mean, I'm going to break this down.

// const testArr = [0];
// console.log(testArr.length);
// console.log(testArr[0]);

// Okay so now I have the first part working, it finds the element in the array. Now I see why they use upper and lower bounds. It allows you to know where the number is in the context of the original array when you find it.

// 111223_2029
// Okay so I just want to start fresh today and see if I can make this work.
// WOW I did it! Hell yeah!

// 111223_2145
// Also have to make sure that it can handle arrays with duplicate values. What about having the function return an array containing all the instances of the target instead of a single value...Well hang on because we know that it's a sorted array. Therefore, any duplicate targets must be directly adjacent to each other. I'm going to write a helper function instead.
