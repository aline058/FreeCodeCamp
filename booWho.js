//Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
    if(bool === true || bool === false){
      return true
    }
    return false;
  }
  
  console.log(booWho(null));

  function booWho(bool) {
    return typeof bool === "boolean"
  }
  
  console.log(booWho(true));