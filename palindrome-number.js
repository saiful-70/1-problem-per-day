const isPalindrome =(x) => {
    let res = String(x).split("").reverse().join("");
    if(String(x) === res) {
      return true
    } else {
      return false
    }
};
