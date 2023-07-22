//Return the factorial of the provided integer.

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


  //explicando o codigo
  //na primeira funcao, usa-se um laco for e a cada iteracao, ocorre a multiplicacao, resultando no numero fatorado
  //na segunda funcao, usa-se recurssao, usando 1 como caso base e chamando a propria funcao para realizar a multiplicacao