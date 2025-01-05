const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    try {
        if (!Array.isArray(arr))
        throw `'arr' parameter must be an instance of the Array!`;
    }
    catch (err) {
        return err;
    }
    let resArr = arr.slice();
    for (let i=0; i<resArr.length; i++) {
        if (resArr[i] === '--double-next') { 
            resArr[i] = resArr[i + 1];
        }
        if (resArr[i] === '--double-prev') {
            resArr[i] = resArr[i - 1];
        }
        if (resArr[i] === '--discard-prev') {
             resArr = resArr.slice(0, i-1).concat(resArr.slice(i + 1));
              console.log(resArr, resArr.length);
         }
         
        if (resArr[i] === '--discard-next') {
             resArr = resArr.slice(0, i).concat(resArr.slice(i + 2));
             console.log(resArr, resArr.length);
         }
    }
    
    
    return resArr;
}

module.exports = {
  transform
};
