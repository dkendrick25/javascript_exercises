//given two arrays, the same length create a new array with the two multiplied together at coordinating positions

var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [];

for (var i = 0; i < 3; i++) {
  arr3.push(arr1[i] * arr2[i])
}
console.log(arr3);
