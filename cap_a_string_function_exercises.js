// given a string, print capitalized
capAString("hello world!")

function capAString(str) {
  var capStr = str.charAt(0).toUpperCase();
  var slicedStr = str.slice(1);
  console.log(capStr + slicedStr);
}
