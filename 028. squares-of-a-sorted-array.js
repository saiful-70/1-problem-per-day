const sortedSquares = (nums) => {
  let arr = [...nums];
  let res = arr.map((val, index) => val*val)
  res.sort((a,b) => a-b);
  return res
}

console.log(sortedSquares([0, -4,-1,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));