const reverseBits = (n) => {
  let str = (n>>>0).toString(2).padStart(32, '0');
    let strReverse = str.split('').reverse().join('');
    return parseInt(strReverse, 2)
};
