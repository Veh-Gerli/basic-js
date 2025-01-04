const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

    let res = '';
    let count = 1;
    let char = str[0];
    for (let i=1; i<str.length; i++) {
        if (str[i]==char) count++;
        else {
            res+= count==1 ? char : count+char;
            char = str[i];
            count = 1;
        }
    }
    
    return res;
}

module.exports = {
  encodeLine
};
