const checkInclusion = (s1, s2) => {
  const arr = Array(26).fill(0);
  const l1 = s1.length,
    l2 = s2.length;

  if (l1 > l2) {
    return false;
  }

  for (let i = 0; i < l1; i++) {
    arr[s1.charCodeAt(i) - 97]++;
    arr[s2.charCodeAt(i) - 97]--;
  }
  if (arr.every((el) => el === 0)) {
    return true;
  }

  for (i = l1; i < l2; i++) {
    arr[s2.charCodeAt(i - l1) - 97]++;
    arr[s2.charCodeAt(i) - 97]--;
    if (arr.every((el) => el === 0)) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
