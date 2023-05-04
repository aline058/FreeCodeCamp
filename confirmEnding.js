
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