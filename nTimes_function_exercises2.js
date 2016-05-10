//write a function `nTimes(fun, n)` that takes a function `fun` and performs `fun` n times.

function fun() {
  console.log("FUN!!!");
}

function nTimes(n) {
  for(var i = 1; i <= n; i++){
    fun();
  }
}

nTimes(4);
