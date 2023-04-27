function reverseString(str) {
    let strReverse = str.split('').reverse().join('');
    return strReverse;
  }
  
  console.log(reverseString("hello"))