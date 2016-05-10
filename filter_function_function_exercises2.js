//Write a function `filter(arr, fun)` that takes an array `arr` and a function `fun` that returns items in the array for which `fun(item)` returns a truthy value.

function positiveNums(num) {
  return num > 0;
}

function filter(arr, positiveNums) {
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
     if (positiveNums(item)) {
       console.log(item);
       break;
     };
  }
}

filter([-1, 2, 3], positiveNums);
