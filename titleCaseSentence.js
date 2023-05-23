//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.


function titleCase(str) {
    let breakSt = str.split(' ');
    let newSt = [];
    for(let st in breakSt){
      newSt[st] = breakSt[st][0].toUpperCase() + breakSt[st].slice(1).toLowerCase();
    } return newSt.join(' ');
   }
   
   console.log(titleCase("I'm a little tea pot"));