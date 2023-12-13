const findLongestWord = function (string) {
  const arr = string.split(" ");
  let word = "";
  for (const iterator of arr) {
    if (iterator.length > word.length) {
      word = iterator;
    }
  }
  return word;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
