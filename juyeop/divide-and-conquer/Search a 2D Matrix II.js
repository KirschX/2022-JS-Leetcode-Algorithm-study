const searchMatrix = function (matrix, target) {
    let answer = false;
    const rowSize = matrix.length;
    const colSize = matrix[0].length;
  
    if (target > matrix[rowSize - 1][colSize - 1]) return answer;
  
    for (let i = 0; i < matrix.length; i++) {
      let left = 0;
      let right = colSize - 1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === matrix[i][mid]) return true;
        else if (target > matrix[i][mid]) {
          left = mid + 1;
        } else if (target < matrix[i][mid]) {
          right = mid - 1;
        }
      }
    }
  
    return answer;
  };