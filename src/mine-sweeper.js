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
function minesweeper(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Соседние координаты
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c]) { // Если есть мина
                // Увеличиваем счетчик для соседних ячеек
                for (const [dr, dc] of directions) {
                    const newRow = r + dr;
                    const newCol = c + dc;
                    // Проверяем, находятся ли соседние ячейки в пределах границ
                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                        result[newRow][newCol]++;
                    }
                }
            }
        }
    }

    return result;
}

module.exports = {
  minesweeper
};
