const maxProfit = (prices) => {
  let min = prices[0],
    res = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] > min) {
      res = Math.max(res, prices[i] - min);
    }
  }

  return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 1, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([2, 1]));
