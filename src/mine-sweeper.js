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
function minesweeper( matrix ) {
  let columns = matrix[0].length;
  let rows=matrix.length;
  let result=new Array(rows);
  for (let i=0; i<rows; i++) {
    result[i] = new Array(columns);
  }
  function countMine(x, y) {    
    result[x][y]= 0;
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (i != x || j != y) {
                try {
                  if(matrix[i][j]){
                    result[x][y]++;
                  }                  
                } catch (e) {}
            }
        }
    }
}

  for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
      countMine(i,j);
    }
  }

return result;
}

module.exports = {
  minesweeper
};
