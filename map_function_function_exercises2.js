//Write a function `map(arr, fun)` that takes an array `arr` and a function `fun` that returns a new array, each element within containing the result of calling `fun(item)` on the item in the corresponding position of the given array.

function fun() {
  return ("fun");
}

function map(arr, fun) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    newArr.push(fun(item));
  }
  console.log(newArr);
}

map([1, 2, 3], fun);
