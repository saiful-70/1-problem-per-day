const searchMatrix = (matrix, target) => {
  const len = matrix[0].length;
  let index = -1;
  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][len - 1]) {
      flag = true;
      index = i;
      break;
    }
  }
  if (index === -1) {
    return false;
  }

  let left = 0,
    right = matrix[0].length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === matrix[index][mid]) {
      return true;
    } else if (target < matrix[index][mid]) {
      right = mid - 1;
    } else if (target > matrix[index][mid]) {
      left = mid + 1;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    0
  )
);
console.log(searchMatrix([[1], [3]], 2));
console.log(searchMatrix([[1]], 1));
