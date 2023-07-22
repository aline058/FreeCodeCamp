//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
//This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
    for(let num of arr){
        if(func(num)){
            return num;
        } 
    }return undefined;
   
  }
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

//explicando o codigo
//o laco for percorre o array e cada elemento é usado como parametro para a funcao dada na funcao principal
//caso o elemento atenda a condicao, este é retornado. Caso contrário o retorno é undefined