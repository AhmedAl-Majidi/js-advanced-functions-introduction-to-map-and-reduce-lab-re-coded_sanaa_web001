// mapToNegativize(sourceArray)
// mapToNoChange(sourceArray)
// mapToDouble(sourceArray)
// mapToSquare(sourceArray)
const sourceArray = [1, 2, 3, -9];

function mapToNegativize(arr){
    return arr.map(function(element) {
      return -1 * element;
  });
}

function mapToNoChange(arr){
    return arr.map(function(element) {
      return element;
  });
}

function mapToDouble(arr){
    return arr.map(function(element) {
      return element * 2;
  });
}

function mapToSquare(arr){
    return arr.map(function(element) {
      return Math.pow(element,2);
  });
}
// reduceToTotal(sourceArray, startingPoint)
// reduceToAllTrue(sourceArray)
// reduceToAnyTrue(sourceArray)

<<<<<<< HEAD
function reduceToTotal(arr, startingPoint=0) {
  // startingPoint =0;
  let total = startingPoint;
  for (let i = 0; i < arr.length; i++ ) {
    total = total + arr[i]
  }
  return total
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] === false) return false
  }
  return true;
}

function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i]===true) return true
  }
  return false;
=======
function reduceToTotal(arr, startingPoint) {
  let total = startingPoint;
  let total = 0;
    return arr.reduce(function(element) {
      return total + element;
  });
>>>>>>> 8d9826eb1c743a04cd7b80cce34f4b96537ec074
}
