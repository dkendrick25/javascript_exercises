//Write a function that takes an array of numbers as the argument and returns an array containing each odd number in the given array
var numArray = [1, 5, 4, 8, 10];
var oddArray = [];
function oddNums() {
  for (var i = 1; i < numArray; i++) {
    if(i % 2 != 0) {
      oddArray.push(numArray[i]);
    }
  }
}

console.log(oddNums());
