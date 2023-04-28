function largestOfFour(arr) {
    let newArr = []
    for(let i of arr){
      let largest = i[0]
      for(let j = 0; j<i.length; j++){
        if(i[j]>largest){
          largest = i[j]
        }
      }newArr.push(largest)
    }return newArr
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



  //usando map e reduce
  function largestOfFourMap(arr) {
    return arr.map((subArr)=>{
        return subArr.reduce((prev, current)=>{
          return current > prev ? current : prev;
        })
      })
  }
  console.log(largestOfFourMap([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));