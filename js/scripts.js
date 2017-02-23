var result = (function(sentence){
  var alphabet = ["b", "c", "d", "f", "g","h","j","k","l","m","n","p","q", "r", "s", "t", "v", "x", "z", "y", "w","a", "u", "o", "i", "e"];
  var consonant = ["b","c", "d", "f", "g","h","j","k","l","m","n","p","q", "r", "s", "t", "v", "x", "z", "y", "w"];
  // if (["a", "u", "o", "i", "e"].indexOf(sentence[0] > -1){
  //   return sentence = sentence + "way";
  // }
  // else {
  //   for (var i = 0;, i<sentence.length; i++)
  // }

  var blankTest = [];
  var vowels = ["a", "u", "o", "i", "e"];
  sentence.forEach(function(word){
    // debugger;
    for(var j=0;j<vowels.length;j++){
      for(var i=0;i<consonant.length;i++){
        if (word.charAt(0) === vowels[j]) {
          return blankTest.push(word + "ay");
        } else if ((word.charAt(1)===vowels[j])&&(word.charAt(0)===consonant[i])){
              var sliced = word.replace(word.charAt(0), "");
              console.log(sliced);
              return blankTest.push(sliced + word.charAt(0) + "ay");
          } else if ((word.charAt(1)===consonant[i])&&(word.charAt(2)===vowels[j])) {
              var sliced1 = word.replace(word.charAt(0), "").replace(word.charAt(1), "");
              console.log(sliced1);
              return blankTest.push(sliced1 + word.charAt(0) + word.charAt(1) + "ay");
          } else if ((word.charAt(2)===consonant[i])&&(word.charAt(3)===vowels[j])) {
              var sliced2 = word.replace(word.charAt(0), "").replace(word.charAt(1), "").replace(word.charAt(2), "");
              console.log(sliced2);
              return blankTest.push(sliced2 + word.charAt(0) + word.charAt(1) + word.charAt(2) + "ay");
          }
        };
      };
    });
  sentence.forEach(function(word){
    if ((word.charAt(0)==="a")||(word.charAt(0)==="u")||(word.charAt(0)==="i")||(word.charAt(0)==="o")||(word.charAt(0)==="e")) {
        return blankTest.push(word + "ay");
        // return $(word).append("ay");
      }
  });
  return blankTest;
});

$(function(){
  $("form#pigSentence").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#inputSentence").val().toLowerCase().split(" ");
    var final = result(userInput)
    console.log(userInput);
    console.log(final);




  });
});
