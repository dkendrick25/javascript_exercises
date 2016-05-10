//given a num print out if it is a multiple of five. use a function

multipleOf5(25);

function multipleOf5(num) {
  if(num % 5 === 0) {
    console.log(num + " is a multiple of 5.");
  } else {
    console.log(num + " is not a multiple of 5");
  }
}
