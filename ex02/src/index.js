// Create a temps array here
var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

// End of temps array

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  // Only change code below this line
  for (var i = 0; i < newTemps.length; i++) {  
    var total = 0;
    for (var k = 0; k < newTemps[i].length; k++) {  
      total = total + newTemps[i][k] / 4;
    }
    averageDayTemp.push(total);
  }

  // Only change code above this line
  return averageDayTemp;
}
console.log(myArrayFunction(temps)); //Change this line
module.exports = myArrayFunction;
