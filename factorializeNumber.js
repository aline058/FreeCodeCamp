function factorialize(num) {
    let newNum = 1
    for(let i = 1; i<=num; i++){
        newNum *= i
        
    }return newNum;
    
  }
  console.log(factorialize(5));


  //usando recursão
  function factorializeRecursion(num){
    if(num === 0){
        return 1
    }else {
        return num * factorializeRecursion(num-1);
    }
  }
  console.log(factorializeRecursion(5))