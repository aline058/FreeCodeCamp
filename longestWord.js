function findLongestWordLength(str) {
    let strArr = str.split(' ');
    let strLength = 0
    for(let i of strArr){
        if(i.length>strLength){
            strLength = i.length
            
        }
    }return strLength
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  