function printABox(columns, rows) {
  var lineOfStars = '';
  for(var i = 1; i <= columns; i++) {
    lineOfStars = lineOfStars + "*";
  }
  console.log(lineOfStars);
  var lineOfStars2 = lineOfStars;
  for (var j = 1; j <= columns; j++) {
    var starsWithSpaces = "*";
    starsWithSpaces = starsWithSpaces + ' ';
  }
  starsWithSpaces = starsWithSpaces + '*';
  for (var h = 1; h <= rows - 2; h++) {
    console.log(starsWithSpaces);
  }
  console.log(lineOfStars2)
}
printABox(4, 5);
 //need to print out one more column of spaces on middle row
