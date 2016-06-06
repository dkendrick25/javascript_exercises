var arr = [1, 6, 3];
var sum = 0;
function arrSum() {
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum());
