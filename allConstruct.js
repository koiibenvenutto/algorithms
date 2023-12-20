const wordBank = ["purp", "p", "ur", "le", "purpl"];
const targetStr = "purple";

const allConstruct = (targetStr, wordBank, combo = []) => {
  if (targetStr === "") return combo;

  const arr = [];
  for (let word of wordBank) {
    if (targetStr.indexOf(word) === 0) {
      let suffix = targetStr.slice(word.length);
      let result = allConstruct(suffix, wordBank, [...combo, word]);
      if (result) {
        if (Array.isArray(result[0])) {
          arr.push(...result);
        } else {
          arr.push(result);
        }
      }
    }
  }

  if (arr[0]) return arr;

  return null;
};

console.log(allConstruct(targetStr, wordBank));
console.log(allConstruct("kitten", ["ki", "it", "i", "en", "k", "ten", "t"]));

// if (Array.isArray(result[0])) return result.push
