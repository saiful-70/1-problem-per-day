const romanToInt = (str) => {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let num = 0,
    i,
    j = 0,
    cnt = 0;
  // let text = str.search('I');
  for (i in roman) {
    let text = str.search(i);
    while (text === 0) {
      if (text === 0) {
        num += roman[i];
        str = str.replace(i, "");
      }
      text = str.search(i);
    }
  }
  return num;
};

console.log(romanToInt("IX"));
