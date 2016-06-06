//sum of numbers of an array

var numArray = [1, 3, 5];

sumArray(numArray);

function sumArray(numArray) {
  var sum = 0;
  for (var i = 0; i <= numArray.length - 1; i++) {
    sum = sum + numArray[i];
  }
  console.log(sum);
}
