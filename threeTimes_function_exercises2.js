//Write a function `threeTimes(fun)` that takes a function `fun` and performs `fun` three times

function fun() {
  console.log("FUN!!!");
}

function threeTimes() {
  fun();
  fun();
  fun();
}

threeTimes(fun);
