$(document).ready(function() {


// Job 14:14 If someone dies, will they live again? All the days of my hard service I will wait for my renewal to come.

  // WE WILL HAVE TO COME BACK LATER TO THIS TO SOLVE

  // TODO: CAPITAL CORRECTION
  var badCapital = $(".bad-capital").text();
  console.log(badCapital);

  function fixedSentence(testString) {
    // This concats the correction of the first letter to upper-caser "charAt(0).toUpperCase()" with the correction of the rest of the sentence...from the second letter to the end "substring(1, testString.length)"
    return testString.charAt(0).toUpperCase() + testString.substring(1, testString.length).toLowerCase();
  }
  // $(".capital-correct").text(fixedSentence(badCapital));

  $(".toggle").click(function() {
    //  alert("this works");
    //  $(".bad-capital").text(fixedSentence(badCapital));
    $(".bad-capital").toggle();
    $(".capital-correct").text(fixedSentence(badCapital) + ". Fixed!").toggle();
  })


  // TODO: CHARACTER REPLACEMENT
  var fixedCapital = fixedSentence(badCapital) + ". Fixed!";
  console.log(fixedCapital);

  textWithout_vowels = "";

  function dash_the_vowels(testString) {
    var vowelIndex = testString.indexOf("e");
    while(vowelIndex !=-1){
      testString = testString.replace("a", "_");
      testString = testString.replace("e", "_");
      testString = testString.replace("i", "_");
      testString = testString.replace("o", "_");
      testString = testString.replace("u", "_");
      vowelIndex = testString.indexOf("e");
      textWithout_vowels = testString;
    }
  }
// dash_the_vowels(fixedCapital);
// console.log(textWithout_vowels);

  $(".capital-correct").click(function () {
    dash_the_vowels(fixedCapital);
    console.log(textWithout_vowels);
    $(".dash-text").text(textWithout_vowels)
    $(".loop-dash").show();
  })

  // TODO Now below may be the code that we needed that uses a loop and replaces the specific characters that we need.

//This function loops through any string that we would pass
  function dashThis(string){
//We replace the all vowels and store them in dashed results. The consonants in dashed vowels
    var dashed_result = "";
    for (var i = 0; i < string.length; i++) {
      var specific_character = string.charAt(i);
      if (specific_character == "a"||
          specific_character == "e"||
          specific_character == "i"||
          specific_character == "o"||
          specific_character == "u"){
          dashed_result += "_";
     }else {
      dashed_result += specific_character;
      }
   }
  //  So when the function is called on a string instead all all letters will be replaced by whatever is stored in dashed text.

   return dashed_result;
  }

 var guessThis = $(".dash-this").text();
 console.log(guessThis);
 var blankString = dashThis(guessThis);
 console.log(blankString);

 $(".dash").click(function () {
    $(".dash-this").toggle()
    $(".this-dash").text(blankString).toggle();
 })
});
