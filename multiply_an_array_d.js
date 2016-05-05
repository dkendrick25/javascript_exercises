//given an array and a factor to multiply with, give a new array with first array nums multiplied by factor

var numArray = [1, 2, 3];
var factor = 2;
var multipliedArray = [];

for (var i = 0; i <= numArray.length - 1; i++) {
  multipliedArray.push(numArray[i] * factor);
}
console.log(multipliedArray);
