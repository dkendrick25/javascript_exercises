//given a string print it is a palindrome if it is one
palindrome("stack cats");

function palindrome(str) {
  var str2 = str.replace(/\s/g, '')
  var reversedStr = str2.split('').reverse().join('');
  if (str2 === reversedStr) {
    console.log(str + ( ' is a palindrome'));
  } else {
    console.log(str + ' is not a palindrome');
  }
}
