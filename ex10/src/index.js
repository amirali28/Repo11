// Only change code below this line
function mySplice(arr1, arr2, n) {
  var newArray1 = [...arr1];
  var newArray2 = [...arr2];

  var myArray = newArray2.splice(n);
  for (let i = newArray1.length; i > 0; i--) {
    newArray2.push(newArray1[i - 1]);
  }
  if (myArray.length != 0) {
    for (let i = 0; i < myArray.length; i++) {
      newArray2.push(myArray[i]);
    }
  }
  return newArray2;
}

// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1)); // Change this line
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;
