const isPalindrome = (s) => {
  let str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  if (str == str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
