//Check if a string (first argument, str) ends with the given target string (second argument, target).


//usando endsWith
function confirmEnding(str, target) {
       return str.endsWith(target) ? true : false;
}


//usando slice
function confirmEndingSlice(str, target) {
    return str.slice(str.length - target.length) == target;
}

console.log(confirmEnding("Bastian", "an"));
console.log(confirmEndingSlice("Bastian", "i"));


//explicacao do codigo
//na primeira funcao, usa-se o metodo endsWith
//na segunda funcao usa-se o metodo slice. Subtraindo o valor do tamanho de target do valor do tamanho da str
//nós teremos um terceiro valor. Usamos esse terceiro valor como parametro no slice, extraindo um trecho da str
//caso o trecho retirado seja igual ao trecho dado como parametro na funcao, o retorno é verdadeiro.