//convert farenheit to celsius
//refactored
console.log(f2c(40));

function f2c(farenheit) {
  var toCelsius = (farenheit - 32) * (5/9);
  return toCelsius;
}
