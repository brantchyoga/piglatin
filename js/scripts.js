var result = (function(sentence){

  var consonant = ["b","c", "d", "f", "g","h","j","k","l","m","n","p","q", "r", "s", "t", "v", "x", "z", "y", "w"];

  var blankTest = [];
  var vowels = ["a", "u", "o", "i", "e"];
  sentence.forEach(function(word){
    // debugger;
    for(var j=0;j<vowels.length;j++){
      for(var i=0;i<consonant.length;i++){
        if (word.charAt(0) === vowels[j]) {
          return blankTest.push(word + "ay");
        } else if ((word.charAt(0)==="q")&&(word.charAt(1)==="u")) {
            return blankTest.push(word.replace(word.charAt(0), "").replace(word.charAt(1), "") + "quay");
        } else if ((word.charAt(0)===consonant[i]) && (word.charAt(1)==="q") && (word.charAt(2)==="u")) {
              return blankTest.push(word.replace(word.charAt(0), "").replace(word.charAt(1), "").replace(word.charAt(2), "") + word.charAt(0) +"quay");
        } else if ((word.charAt(1)===vowels[j])){
              return blankTest.push(word.replace(word.charAt(0), "") + word.charAt(0) + "ay");
          } else if ((word.charAt(2)===vowels[j])) {
              return blankTest.push(word.replace(word.charAt(0), "").replace(word.charAt(1), "") + word.charAt(0) + word.charAt(1) + "ay");
          } else if ((word.charAt(3)===vowels[j])) {
              return blankTest.push(word.replace(word.charAt(0), "").replace(word.charAt(1), "").replace(word.charAt(2), "") + word.charAt(0) + word.charAt(1) + word.charAt(2) + "ay");
          } 
        };
      };
    });

  return blankTest;
});

$(function(){
  $("form#pigSentence").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#inputSentence").val().toLowerCase().replace(",", "").replace(".", "").split(" ");
    var final = result(userInput)
    console.log(userInput);
    console.log(final);




  });
});
