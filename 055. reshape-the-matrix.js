const matrixReshape = (mat, r, c) => {
  const arr = [], resArr = [];
  for(let i=0;i<mat.length;i++) {
    for (let j=0;j<mat[i].length;j++) {
      arr.push(mat[i][j])
    }
  }

  if(r*c !== arr.length) {
    return mat
  }

  for(let i=0;i<r;i++) {
    resArr.push(arr.splice(0, c))
  }
  return resArr
}

console.log(matrixReshape([[1,2],[3,4]], 1, 4));
console.log(matrixReshape([[1,2],[3,4]], 2, 4));