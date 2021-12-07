let area = 0;

const dfs = (grid, row, col) => {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) {
    return;
  }

  if (grid[row][col] === 0) {
    return;
  }

  area++;
  grid[row][col] = 0;

  dfs(grid, row + 1, col);
  dfs(grid, row - 1, col);
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
};

const maxAreaOfIsland = (grid) => {
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        area = 0;
        dfs(grid, i, j);
        res = Math.max(res, area);
      }
    }
  }

  return res;
};
