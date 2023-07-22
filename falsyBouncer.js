//Remove all falsy values from an array. Return a new array; do not mutate the original array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    let newArr = []
    for(let i in arr){
       if(arr[i])
        newArr.push(arr[i])
        } return newArr
    }

  console.log(bouncer([7, "ate", "", false, 9]));

  //explicando o codigo
  //com o laco for percorremos o array e usamos uma condicao para saber se o elemento é verdadeiro
  //caso seja verdadeiro ele é adicionado a um novo array, que é retornado no final