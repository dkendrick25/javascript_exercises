//given 2 two-dimensional arrays of nums 2x2..calculate the result of adding them together
var m1 = [
  [1,2],
  [3,3]
];

var m2 = [
  [5,6],
  [7,8]
];
var m3 = [];
var i = 0;
while (i < 2) {
  var j = 0;
  var row = [];
  while (j < 2) {
    var sum = m1[i][j] + m2[i][j];
    row.push(sum);
    j++
  }
  m3.push(row);
  i++
}
console.log(m3);
