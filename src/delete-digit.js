const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = -1;
  let strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    let temp = strN.slice(0, i) + strN.slice(i + 1);
    max = Math.max(Number(temp), max);
  }

  return max;
}

module.exports = {
  deleteDigit
};
