const numbers = [2, 3, 5];

const bestSum = (targetValue, numbers, memo = {}) => {
  if (targetValue in memo) return memo[targetValue];
  if (targetValue === 0) return [];
  if (targetValue < 0) return null;

  let shortest = null;
  for (let num of numbers) {
    let remainder = targetValue - num;
    let result = bestSum(remainder, numbers, memo);

    if (result !== null) {
      let combination = [...result, num];
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }

  if (shortest) {
    memo[targetValue] = shortest;
    return memo[targetValue];
  }

  memo[targetValue] = null;
  return memo[targetValue];
};

console.log(bestSum(8, numbers));

// canSum starter challenge
// const numbers = [7, 14];

// const canSum = (targetValue, numbers, memo = {}) => {
//   if (targetValue in memo) return memo[targetValue];
//   if (targetValue === 0) return true;
//   if (targetValue < 0) return false;

//   for (let i = 0; i < numbers.length; i++) {
//     if (canSum(targetValue - numbers[i], numbers, memo)) {
//       memo[targetValue] = true;
//     } else {
//       memo[targetValue] = false;
//     }
//     return memo[targetValue];
//   }
// };

// console.log(canSum(300, numbers));
