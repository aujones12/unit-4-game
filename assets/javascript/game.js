
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = './images/Diamonds.svg';

    imgArray[1] = new Image();
    imgArray[1].src = './Emerald.svg';

    imgArray[2] = new Image();
    imgArray[2].src = 'images/Ruby.svg';

    imgArray[2] = new Image();
    imgArray[2].src = 'images/Topaz.svg';

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}
var numberOptions = Math.floor(Math.random() * (+120 - +19)) + +19;
var randomCrystalValue =Math.floor(Math.random() * (+12 - +1)) + +1;
$("#number-to-guess").text(targetNumber);

var counter = 0;
var numWins = 0;
var numLosses = 0;

for (var i = 0; i < imgArray.length; i++) {

  var imageCrystal = $();
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("data-crystalvalue", randomCrystalValue);

  $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  //alert("New score: " + counter);
  $("#score").append(counter);  

  if (counter === targetNumber) {
    numWins++;
    $("#wins").append(numWins);
  }

  else if (counter >= targetNumber) {
    numLosses++;
    $("#losses").append(numLosses);  }

});

