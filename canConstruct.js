const wordBank = ["ab", "abc", "cd", "def", "abcd"];
const targetStr = "abcdef";

const canConstruct = (targetStr, wordBank) => {
  if (targetStr === "") return true;

  for (let word of wordBank) {
    if (targetStr.slice(0, word.length) === word) {
      const suffix = targetStr.slice(word.length);
      if (canConstruct(suffix, wordBank)) return true;
    }
  }

  return false;
};

console.log(canConstruct(targetStr, wordBank));

// targetStr.slice(targetStr.length - word.length) === word

// NOTE: you can't subtract strings from each other the way you would numbers.
// console.log(targetStr.slice(0, -wordBank[0].length));
// console.log(targetStr.slice(wordBank[0].length));
