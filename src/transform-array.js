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
    let notChange = -2;
    for (let i=0; i<resArr.length; i++) {
        if (resArr[i] === '--double-next' ) { 
            if (notChange !== i+1 && i < resArr.length - 1 ) {
            resArr[i] = resArr[i + 1];
            notChange = i;
            }
            else resArr = resArr.slice(0, i).concat(resArr.slice(i + 1));
        }
        if (resArr[i] === '--double-prev' ) {
            if (notChange !== i-1 && i > 0 ) {
            resArr[i] = resArr[i - 1];
            notChange = i;
            }
            else resArr = resArr.slice(0, i).concat(resArr.slice(i + 1));
        }
        if (resArr[i] === '--discard-prev') {
              console.log(resArr, resArr[i], i, notChange)
            if ( i > 0  && notChange !== i-1)
             {resArr = resArr.slice(0, i-1).concat(resArr.slice(i + 1));
              console.log(resArr, resArr.length);
              notChange = i+1;
              i--;
             }
             else  resArr = resArr.slice(0, i).concat(resArr.slice(i + 1));
         }
         
        if (resArr[i] === '--discard-next') {
            if (i < resArr.length - 1  && notChange !== i+1) {
             resArr = resArr.slice(0, i).concat(resArr.slice(i + 2));
             notChange = i-1;
             i--;
            }  else  resArr = resArr.slice(0, i).concat(resArr.slice(i + 1));
         }
    }
    return resArr;
}

module.exports = {
  transform
};
