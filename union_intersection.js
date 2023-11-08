// NEXT UP:

// ~*Given two sorted arrays, return their union and intersection*~

// So obviously I can loop through every element of the first array and then use a helper function to, for every element of the first array check it against every element of the second array...
// It really doesn't help that we have duplicate values though, so I think first I'm going to remove the duplicates by turning them into sets.

// Now it only makes sense to start with the smallest array because we know that we have all unique values, that means that it's impossible if we check for every value in the shorter array in the larger array, that we would miss anything or do extra work, if we were to check with the bigger array we would be doing redundant work.

// As always let's start with the first brute force method that comes to mind:

const a = [1, 2, 5];
const b = [8, 9, 1, 3, 5];

function unionAndIntersection(arrA, arrB) {
  const aUnique = [...new Set(arrA)];
  const bUnique = [...new Set(arrB)];
  let shortArr = aUnique;
  let longArr = bUnique;
  if (aUnique.length > bUnique.length) {
    longArr = aUnique;
    shortArr = bUnique;
  }

  const union = [...shortArr];
  const intersection = [];
  for (let i = 0; i < longArr.length; i++) {
    if (shortArr.indexOf(longArr[i]) !== -1) {
      intersection.push(longArr[i]);
    } else {
      union.push(longArr[i]);
    }
  }
  return [union, intersection];
}

console.log(unionAndIntersection(a, b));
