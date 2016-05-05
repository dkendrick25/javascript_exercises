//print smallest number in array
var numArray = [12, 23, 14];
var smallestNum = numArray[0];
for (var i = 0; i <= numArray.length; i++) {
  if (numArray[i] < smallestNum) {
   smallestNum = numArray[i];
   }
  }
  console.log(smallestNum);
