const length = 2;
const prices = [1, 5, 8, 9, 10];

function rodCutting(length, prices) {
  if (length === 0) {
    return 0;
  }

  max = -Infinity;

  for (let i = 1; i <= length; i++) {
    let temp = prices[i - 1] + rodCutting(length - i, prices);
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(rodCutting(length, prices));
