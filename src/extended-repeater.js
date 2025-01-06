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
  // Convert str to string if it's not already
  str = String(str);
  
  // Set default values for options
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  // Create the addition part
  const additionPart = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  // Create the final result
  const result = Array(repeatTimes).fill(str + additionPart).join(separator);

  return result;
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
