const getRow = (rowIndex) => {
  let number = [[1], [1,1]];
  if (rowIndex === 0) {
    return number[0];
  } else if (rowIndex === 1) {
    return number[1]
  }
  let i, j;
  for (i = 2; i <= rowIndex; i++) {
    let row = [];
    for (j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(number[i - 1][j - 1] + number[i - 1][j]);
      }
    }
    // console.log(row + "here");
    number.push(row);
  }
  return number[rowIndex];
};