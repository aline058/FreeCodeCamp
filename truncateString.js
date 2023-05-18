function truncateString(str, num) {
        if(str.length > num){
           let newStr = str.slice(0, num)+'...'
            return newStr
        } 
     return str;
        

    
  }
  


  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));