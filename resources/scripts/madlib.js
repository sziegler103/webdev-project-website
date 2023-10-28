function displayMadLib() {
  var paragraph1 = document.getElementById("madlibpar1");
  var paragraph2 = document.getElementById("madlibpar2");
  var word1 = document.getElementById("madlibword1").value; // noun
  var word2 = document.getElementById("madlibword2").value; // noun
  var word3 = document.getElementById("madlibword3").value; // verb
  var word4 = document.getElementById("madlibword4").value; // noun
  var word5 = document.getElementById("madlibword5").value; // emotion
  var word6 = document.getElementById("madlibword6").value; // body part
  var word7 = document.getElementById("madlibword7").value; // "ing" verb
  var word8 = document.getElementById("madlibword8").value; // adjective

  paragraph1.innerHTML = "Driving a motorized "
    + "<span>" + word1 + "</span>"
    + " is easy. All you need is the "
    + "<span>" + word1 + "</span>"
    + " itself and the "
    + "<span>" + word2 + "</span>" 
    + " that goes to it. First, " 
    + "<span>" + word3 + "</span>"
    + " your seatbelt. Then, while pressing your "
    + "<span>" + word6 + "</span>"
    + " on the brake pedal, insert the "
    + "<span>" + word2 + "</span>"
    + " into the ignition "
    + "<span>" + word4 + "</span>"
    + " and rotate it.";

  paragraph2.innerHTML = "You should feel the "
    + "<span>" + word1 + "</span>"
    + " come to life with a loud noise, but don't be "
    + "<span>" + word5 + "</span>"
    + ". This means it's working normally. Check your surroundings, and if"
    + " they're clear, slowly put your "
    + "<span>" + word6 + "</span>"
    + " on the gas pedal. Your "
    + "<span>" + word1 + "</span>"
    + " should start "
    + "<span>" + word7 + "</span>"
    + " forward. Congratulations! You now know the basics of operating a motor-"
    + "<span>" + word1 + "</span>"
    + ". Stay "
    + "<span>" + word8 + "</span>"
    + " out there!";
}