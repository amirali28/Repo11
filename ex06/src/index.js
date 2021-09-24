// Only change code below this line
function multiplyArrayFunction(myArray) {
  myNewArray = [...myArray];
  var sum = 0;
  var product = 1;
  for (var i = 0; i < myNewArray.length; i++) {
    for (var k = 0; k < myNewArray[i].length; k++) {
      sum = sum + myNewArray[i][k];
      product = product * myNewArray[i][k];
    }
  }
  var arr = [product, sum];
  return arr;
}
// Only change code above this line
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]])); // Change this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(
multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9],]));
module.exports = multiplyArrayFunction;
