const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChars = 0;

  let chars_s1 = new Map();
  console.log(s1);

  let count = 0;
  s1.split('').forEach(item => {
    if (!chars_s1.has(item))
      count = 0;
    chars_s1.set(item, ++count)
  })
  console.log(chars_s1);


  for (let i = 0; i < s2.length; i++) {

    if (chars_s1.get(s2[i]) > 0) {
      commonChars++;
      chars_s1.set(s2[i], chars_s1.get(s2[i]) - 1);
    }
  }

  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};
