//Return the lowest index at which a value (second argument) should be inserted into an array
//(first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b)
    
    for(let i in arr){
        if(arr[i] >= num)
        return i
    }return arr.length
  }

  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));


  //explicacao do codigo:
  //primeiro o array é organizado em ordem, usando comparador no metodo sort para que fique do menor para o maior
  //depois é feito um laco for para comparar cada posicao do array com o numero dado como parametro
  //quando o numero for menor ou igual a posicao do array, o indice é retornado
  //do contrario, o tamanho do array é retornado, ja que o numero devera ficar na ultima posicao