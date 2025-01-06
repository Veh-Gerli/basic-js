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
    calculateDepth(arr) {
        // Base case: if the array is empty, its depth is 1
        if (!Array.isArray(arr) || arr.length === 0) {
            return 1;
        }

        // Initialize maxDepth to 1 for the current level
        let maxDepth = 1;

        // Iterate through each element in the array
        for (let element of arr) {
            // If the element is an array, calculate its depth recursively
            if (Array.isArray(element)) {
                const currentDepth = this.calculateDepth(element) + 1; // Add 1 for the current level
                maxDepth = Math.max(maxDepth, currentDepth); // Update maxDepth if currentDepth is greater
            }
        }

        return maxDepth; // Return the maximum depth found
    }
}


module.exports = {
  DepthCalculator
};
