const canConstruct = (ransomNote, magazine) => {
    if(ransomNote.length > magazine.length) {
      return false;
    }

    // return magazine.includes(ransomNote[0])

    const str = magazine.split("")

    for(let i=0;i<ransomNote.length;i++) {
      if(str.includes(ransomNote[i])) {
        const index = str.indexOf(ransomNote[i]);
        str.splice(index, 1)
      } else {
        return false;
      }
    }

    return true;
};

console.log(canConstruct('aaa','aab'));