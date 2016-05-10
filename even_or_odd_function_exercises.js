//given a max num which nums 1 - num are odd

evenOrOdd(20);

function evenOrOdd(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    };
  };
}
