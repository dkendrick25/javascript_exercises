//Write a function `each(arr, fun)` that takes an array `arr` and a function `fun` that calls `fun(item)` for each item within the given array

function fun() {
  console.log("fun");
}

function each(array, fun) {
  for(var i = 0; i < array.length; i++) {
    var item = array[i];
    fun(item);
  }
}

each([1, 2, 3], fun);
