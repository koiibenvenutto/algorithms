const wordBank = ["purp", "p", "ur", "le", "purpl"];
const targetStr = "purple";

const canConstruct = (targetStr, wordBank, memo = {}) => {
  if (targetStr in memo) return memo[targetStr];
  if (targetStr === "") return 1;

  let sum = 0;
  for (let word of wordBank) {
    if (targetStr.indexOf(word) === 0) {
      sum += canConstruct(targetStr.slice(word.length), wordBank, memo);
    }
  }
  memo[targetStr] = sum;
  console.log(memo);
  return sum;
};

console.log(canConstruct(targetStr, wordBank));
// console.log(
//   canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeek", [
//     "e",
//     "eeee",
//     "eek",
//   ])
// );
console.log(canConstruct("kitten", ["ki", "it", "i", "en", "k", "ten", "t"]));

// targetStr.slice(targetStr.length - word.length) === word

// NOTE: you can't subtract strings from each other the way you would numbers.
// console.log(targetStr.slice(0, -wordBank[0].length));
// console.log(targetStr.slice(wordBank[0].length));

// Now the goal is to return a string that
