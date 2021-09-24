// Only change code below this line
function myMutation(arr) {
  var arr1 = arr[0].toLowerCase().split("");
  var arr2 = arr[1].toLowerCase().split("");
  if (arr1.length < arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) == -1) {
        return false;
      };
    };
  }
   else if (arr1.length >= arr2.length) {
    for (var k = 0; k < arr2.length; k++) {
      if (arr1.indexOf(arr2[k]) == -1) {
        return false;
      };
    };
  };
  return true;
};
// Only change code above this line
console.log(myMutation(["floor", "for"])); // Change this line
console.log(myMutation(["Hello", "Hey"]));
module.exports = myMutation;
