const minimumTotal = (triangle) => {
  if (triangle.length === 1) {
    return triangle[0][0];
  }

  let i,
    j,
    index = 1,
    len,
    mn = Infinity;

  let res = triangle[0][0];
  for (i = 1; i < triangle.length; i++) {
    // console.log(index);
    len = triangle[i].length;

    if (index === 0) {
      j = index;
    } else {
      j = index-1;
    }

    let val = index;
    // console.log(val);
    for (; j <= val + 1 && j < len; j++) {
      if (triangle[i][j] < mn) {
        mn = triangle[i][j];
        index = j;
      }
    }
    console.log(res+= mn);
    res+= mn;

    mn = Infinity;
    // console.log(res);
  }

  // return res
};

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// console.log(minimumTotal([[2], [3, -4]]));
// console.log(minimumTotal([[-10]]));
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
