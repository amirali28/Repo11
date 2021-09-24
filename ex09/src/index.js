// Only change code above this line
function myBouncer(arr) {
  newArray = [...arr];
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
//Only change code above this line
console.log(myBouncer([7, "ate", "", false, 9])); // Change this line
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;
