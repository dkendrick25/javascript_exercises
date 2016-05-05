//print largest number in array
var numArray = [12, 23, 14];
var largestNum = 0;
for (var i = 0; i <= numArray.length; i++) {
  if (numArray[i] > largestNum) {
    largestNum = numArray[i];
   }
  }
  console.log(largestNum);
