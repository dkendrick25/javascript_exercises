//print smallest number in array
var numArray = [12, 23, 14];
var smallestNum = 0;
for (var i = 0; i <= numArray.length; i++) {
  if (numArray[i] < smallestNum && numArray[i] > 0) {
   smallestNum = numArray[i];
   }
  }
  console.log(smallestNum);
//stays at 0....need to make smallestNum increment
