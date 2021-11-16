const plusOne = (digits) => {
  const num = digits;
  if(digits[digits.length-1] === 9) {
    let i,flag = digits.length;
    for(i=digits.length-1;i>=0;i--) {
      if(digits[i] === 9) {
        flag--;
      } else {
        break;
      }
    }
    if(flag === 0) {
      num[0] = 1;
      for(i=1; i<digits.length; i++) {
        num[i] = 0;
      }
      num.push(0);
    } else {
      num[flag - 1]++;
      for(i=flag; i<digits.length;i++) {
        num[i] = 0
      }
    }
  } else {
    num[digits.length-1]++;
  }
  return num
}

console.log(plusOne([3,9,9,9]));