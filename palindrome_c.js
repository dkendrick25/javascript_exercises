//given a string print it is a palindrome if it is one
var str = "amor mora";
var splitStr = str.split('');
var reversedStr = splitStr.reverse();
if (splitStr === reversedStr) {
  console.log(str + " is a palindrome!")
} else {
  console.log(str + " is not a palindrome.");
}
