//loop through str to check letters and update
var str= "hello, how are you?";

var letterCounts = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0
};

for (var i = 0; i < str.length; i++) {
   var char = str.charAt(i);
   letterCounts[char] = letterCounts[char] + 1;
}
// prints out chars in updated object
for (var char in letterCounts) {
  var count = letterCounts[char];
  console.log(char + ": " + count);
}
