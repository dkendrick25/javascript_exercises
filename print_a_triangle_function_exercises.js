//given an array. print a centered triangle
function printTriangle(numbers) {
  for (var i = 0; i <= numbers.length; i++) {
      if (numbers [i] === 0) {
          console.log( "    *");
      }
      if (numbers [i] === 1) {
          console.log("   ***");
      }
      if (numbers [i] === 2) {
         console.log("  *****");
      }
      if (numbers [i] === 3) {
         console.log(" *******"); }
      if (numbers [i] === 4) {
          console.log("*********");
      }
  }
}
printTriangle([0, 1, 2, 3, 4]);
