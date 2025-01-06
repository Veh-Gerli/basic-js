const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionPart = Array(options.additionRepeatTimes || 1).fill(addition).join(options.additionSeparator || '|');

  return Array(options.repeatTimes || 1).fill(str + additionPart).join(options.separator || '+');
}

// Example usage:
console.log(repeater('STRING', {
  repeatTimes: 3,
  separator: '**',
  addition: 'PLUS',
  additionRepeatTimes: 3,
  additionSeparator: '00'
}));

module.exports = {
  repeater
};
