var orangesRotting = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;

  const rowDirections = [1, -1, 0, 0],
    colDirections = [0, 0, 1, -1];

  let queue = [],
    minute = 0,
    fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  while (fresh && queue.length) {
    const next = [];

    for (let [row, col] of queue) {
      for (let i = 0; i < rowDirections.length; i++) {
        const rowNeighbor = row + rowDirections[i],
          colNeighbor = col + colDirections[i];

        if (
          rowNeighbor < rows &&
          rowNeighbor >= 0 &&
          colNeighbor < cols &&
          colNeighbor >= 0 &&
          grid[rowNeighbor][colNeighbor] === 1
        ) {
          fresh--;

          grid[rowNeighbor][colNeighbor] = 2;

          next.push([rowNeighbor, colNeighbor]);
        }
      }
    }

    minute++;

    queue = next;
  }

  return !!fresh ? -1 : minute;
};
