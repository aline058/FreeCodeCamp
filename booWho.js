//Check if a value is classified as a boolean primitive. Return true or false.

function booWho1(bool) {
    if(bool === true || bool === false){
      return true
    }
    return false;
  }
  
 

  function booWho2(bool) {
    return typeof bool === "boolean"
  }


  console.log(booWho1(null));
  console.log(booWho2(false));


  //explicacao do codigo
  //na primeira funcao comparamos o parametro com true ou false. Se nao estiver nessa condicao, o retorno é falso
  //na segunda funcao usa-se o typeof para saber se é booleano