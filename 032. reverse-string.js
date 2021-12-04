const reverseString = (s) => {
  let mid = Math.floor(s.length/2);
  let i, j;
  for(i=0, j=s.length-1; i<mid,j>=mid;i++,j--) {
    [s[i], s[j]] = [s[j], s[i]]
  }
  return s;
}

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));