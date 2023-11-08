// const array = [1, 9, 4, 2];
// const reversedArr = [];
// for (i = array.length - 1; i >= 0; i--) {
//   reversedArr.push(array[i]);
// }
// console.log(reversedArr);

const array = [1, 4, 7, 4, 2, 2, 6, 6];


const a = [1, 6, 5, 8, 9, 3, 2, 5]
const b = [8, 1, 8, 0, 3, 4, 1, 6, 7, 3, 4, 5, 9, 1]

function unionAndIntersection(arrA, arrB) {
  const aUnique = [...new Set(arrA)]
  const bUnique = [...new Set(arrB)]
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
      intersection.push(longArr[i])
    } else {
      union.push(longArr[i])
    }
  }
  return [union, intersection];
}

console.log(unionAndIntersection(a, b));

