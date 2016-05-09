var m3 = [
  [6,8],
  [10,11]
];
var m4 = [
  [9,10],
  [11,12]
];
var row1 = [];
var row2 = [];
var m5 = [];
for(var i = 0; i < m3.length; i++) {

  for(var j = 0; j < m3.length; j++) {
    var sum = m3[i][j] + m4[i][j];
    row.push(sum);
  }
  m5.push(row);
}
console.log(m5);

//needs to be split into two matricies
