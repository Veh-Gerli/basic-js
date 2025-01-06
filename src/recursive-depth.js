const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
      this.length = 0;
  }
  calculateDepth(arr) {
        
    let maxLength = 1;
    
    arr.forEach( (item) => {
        
        if (Array.isArray(item)) { 
          maxLength = this.calculateDepth(item);
          maxLength++;
          if (maxLength > this.length) this.length = maxLength;
        }
    })
    
    return maxLength;
  }
}



module.exports = {
  DepthCalculator
};
