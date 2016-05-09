//Write a function that takes an array of numbers as the argument and returns an array containing each positive number in the given array
var arr = [1, 2, 4, 5, -8, -20];
var posArray = [];

function positiveNums() {
  for (var i = 0; i < arr.length; i++){
    if(arr[i] > 0) {
      posArray.push(arr[i]);
    }
  }
}
console.log(positiveNums());
