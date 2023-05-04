//usando laco for
function repeatStringNumTimes1(str, num) {
    let newStr = ''
    if(num<=0){
        return newStr
    }else{
        for(let i = 0;i<num;i++){
           newStr += str
        }return newStr
    }
  }

  //usando repeat
  function repeatStringNumTimes2(str, num) {
        return str.repeat(num)
  }
  
  console.log(repeatStringNumTimes1("abc", 3));
  console.log(repeatStringNumTimes2("abc", 3));