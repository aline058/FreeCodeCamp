//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for(let i in second){
    if(first.indexOf(second[i])< 0)
    return false
    
  }return true;
}

mutation(["hello", "hey"]);