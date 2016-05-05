// given a num print the sum of the even numbers between 1 and n
var n = 6;
var sum;
for (var i = 1; i <= n; i++) {
  if(i % 2 === 0) {
    sum += n[i];
  }
  console.log(sum);
}
