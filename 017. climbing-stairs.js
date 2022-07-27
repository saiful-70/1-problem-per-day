const climbStairs = (n) => {
  // In recurion : Slow Process and memory consuming
  // if(n <= 1) return 1;
  // return climbStairs(n-1) + climbStairs(n-2)

  // General for loop
  let a =0 , b=1;
  for(i=0; i<n;i++) {
    [a, b] = [b, a+b] //destructuring
  }

  return b;
}

console.log(climbStairs(1));