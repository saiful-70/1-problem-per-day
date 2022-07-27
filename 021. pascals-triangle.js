const generate = (numRows) => {
  let number = [[1]];
  if(numRows  === 1) {
    return number;
  }
  let i, j;
  for(i=1;i<numRows;i++) {
    let row = [];
    for(j=0; j<=i; j++) {
      if(j=== 0 || j===i) {
        row.push(1)
      } else {
        row.push(number[i-1][j-1] + number[i-1][j])
      }
    }
    console.log(row + "here");
    number.push(row)
  }
  return number;
}

console.log(generate(5));