// Option 1:

function removeDups1(array) {
  let uniqueArr = [];

  function helper(n) {
    if (uniqueArr.length == 0) return true;
    for (j = 0; j < uniqueArr.length; j++) {
      if (n == uniqueArr[j]) {
        return false;
      }
    }
    return true;
  }

  for (i = 0; i < array.length; i++) {
    if (helper(array[i])) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}
console.log(removeDups1(array));

// Option 2:

function removeDups2(array) {
  let uniqueArr = [];
  // By saving the length of the array to a variable it doesn't need to calculated on every cycle of the for loop so this would be good to keep in mind for larger arrays
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}
console.log(removeDups2(array));

// Option 3:
// This one uses the built in sort method which is O(n log n)
function removeDups3(array) {
  let uniqueArr = [];
  array.sort();
  let _temp;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== _temp) {
      uniqueArr.push(array[i]);
      _temp = array[i];
    }
  }
  return uniqueArr;
}
console.log(removeDups3(array));

// Option 4:
// This method takes advantage of how every key in an object must be uniquely named but it seems kind of silly given that sets exist:
obj = {};

for (let i of array) {
  obj[i] = true;
}
let anotherSortedArray = Object.keys(obj);
console.log(anotherSortedArray);

// Option 5:
// Here's a way to do it in a single line using a set and the spread operator
console.log([...new Set(array)]);

// I could do the same thing as the .sort solution but just using the quicksort function that I wrote to get another O(n log n) solution
