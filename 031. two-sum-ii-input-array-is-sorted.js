const twoSum = (numbers, target) => {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      }
      if (numbers[i] + numbers[j] === target) {
        arr.push(i + 1);
        arr.push(j + 1);
        break;
      }
    }
    if (arr.length) {
      break;
    }
  }
  return arr;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
