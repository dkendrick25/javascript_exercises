//given array give new array of positive numbers

var numArray = [1, 4, 6, -9, -20];
var posArray = [];

for (var i = 0; i <= numArray.length - 1; i++) {
  if (numArray[i] > 0) {
    posArray.push(numArray[i]);
  }
}
console.log(posArray);
