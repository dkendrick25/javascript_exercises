// given a num print the sum of the even numbers between 1 and n
var n = 6;
var sum = 0;
for (var i = 1; i <= n; i++) {
  if(i % 2 === 0) {
    sum = sum + i;
  }
}
   console.log(sum);
 
