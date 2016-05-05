var n = 4;
/*
0- 3 spaces, 1 star
1- 2 spaces, 3 stars
2- 1 space, 5 stars
3- 7 stars
*/

var counter = 0;
while(counter < n){
  var numSpaces = n - 1 - counter;
  var numOfStars = 1 + 2 * counter;
  var row = "";
  var spacesCounter = 0;
  while(spacesCounter < numSpaces) {
    row = row + " ";
    spacesCounter = spacesCounter + 1;
  }
  var starsCounter = 0;
  while(starsCounter < numOfStars){
    row = row + '*';
    starsCounter = starsCounter + 1;
  }
  counter = counter + 1;
}
