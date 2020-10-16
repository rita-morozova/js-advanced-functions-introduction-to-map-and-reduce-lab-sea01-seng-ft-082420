function mapToNegativize(sourceArray){
  let result =[]
  for (let i=0; i < sourceArray.length; i++){
    result.push(-1 * sourceArray[i])
  }
  return result
}

function mapToNoChange(sourceArray){
  let result =[]
  for (let i = 0; i< sourceArray.length; i++){
    result.push(sourceArray[i])
  }
  return result
}

function mapToDouble(sourceArray){
  let result = []
  for( let i=0; i< sourceArray.length; i++){
    result.push(sourceArray[i] * 2)
  }
  return result
}

function mapToSquare(sourceArray){
  let result=[]
  for (let i=0; i< sourceArray.length; i++){
    result.push(sourceArray[i]* sourceArray[i])
  }
  return result
}

function reduceToTotal(sourceArray, startingPoint= 0){
  let total= startingPoint
  for (let i=0; i<sourceArray.length; i++){
    total += sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray){
  for(let i =0; i < sourceArray.length; i++){
    if(!sourceArray[i]){
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray){
  for(let i =0; i < sourceArray.length; i++){
    if(sourceArray[i]){
      return true
    }
  }
  return false
}