//Given a paragraph of text, for each word present in the paragraph, print the number of time the word was used in the paragraph.

var paragraph = "this is a paragraph of text to use for this exercise";
var words = paragraph.split(' ');
var wordSummary = {};
var count = 0;

for (var i = 0; i < words.length; i++) {
    var word = words[i];
  if (!(word in wordSummary)) {
    wordSummary[word] = 0;
  }
   wordSummary[word] = wordSummary[word] + 1;
  }

for (var word in wordSummary) {
  count = wordSummary[word];
  console.log(word + ": " + count);
}

//needs to update the counter
