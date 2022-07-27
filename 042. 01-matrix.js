const updateMatrix = function (mat) {
  const queue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] > 0) {
        mat[i][j] = Infinity;
      } else {
        queue.push([i, j, 0]);
      }
    }
  }

  console.log(queue);

  let direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (queue.length) {
    let [row, col, pos] = queue.shift();

    if (mat[row][col] > pos) {
      mat[row][col] = pos;
    }

    direction.forEach(([r, c]) => {
      if (
        row + r >= 0 &&
        row + r < mat.length &&
        col + c >= 0 &&
        col + c < mat[0].length
      ) {
        if (mat[row + r][col + c] === Infinity) {
          queue.push([row + r, col + c, pos + 1]);
        }
      }
    });
  }

  return mat
};
