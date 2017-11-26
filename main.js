$(document).ready(function() {

// This is responsible for correcting a string in terms of cases
  var badCapital = $(".bad-capital").text();
  console.log(badCapital);
  function fixedSentence(testString) {
    // This concats the correction of the first letter to upper-caser "charAt(0).toUpperCase()" with the correction of the rest of the sentence...from the second letter to the end "substring(1, testString.length)"
    return testString.charAt(0).toUpperCase() + testString.substring(1, testString.length).toLowerCase();
  }
  // $(".capital-correct").text(fixedSentence(badCapital));

  $(".toggle").click(function () {
    //  alert("this works");
    //  $(".bad-capital").text(fixedSentence(badCapital));
    $(".bad-capital").toggle();
    $(".capital-correct").text(fixedSentence(badCapital) + ". Fixed!" ).toggle();
  })

// This is responsible for changing characters in a strings
   var fixedCapital = fixedSentence(badCapital)+ ". Fixed!";
   console.log(fixedCapital);
});
