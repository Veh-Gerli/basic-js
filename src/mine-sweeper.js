const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const matrix = [
        [false, false, false],
        [false, false, false],
      ];

function minesweeper(matrix) {
  let resArr = [];
  for (let i=0; i<matrix.length; i++) {
  let arr = [];
    for (let j=0; j<matrix[i].length; j++) {
        let countMin = 0;
            
                
                if (j<matrix[i].length-2 && matrix[i][j+1]) countMin++;
                if (j>0 && matrix[i][j-1]) countMin++;
                
                if (i>0)
                {
                    if (matrix[i-1][j]) countMin++;
                    if (j<matrix[i].length-2 && matrix[i-1][j+1]) countMin++;
                    if (j>0 && matrix[i-1][j-1]) countMin++;
                }
                
                if (i<matrix.length - 2) 
                {
                    if (matrix[i+1][j]) countMin++;
                    if (j<matrix[i].length-2 && matrix[i+1][j+1]) countMin++;
                    if (j>0 && matrix[i+1][j-1]) countMin++;
                }
            
            
            arr.push(countMin);
        }
        
        resArr.push(arr);
  }
    
  return resArr;
}

console.log(minesweeper(matrix));

module.exports = {
  minesweeper
};
