
// var imgArray = new Array();

//     imgArray[0] = new Image();
//     imgArray[0].src = './images/Diamonds.svg';

//     imgArray[1] = new Image();
//     imgArray[1].src = './Emerald.svg';

//     imgArray[2] = new Image();
//     imgArray[2].src = './images/Ruby.svg';

//     imgArray[2] = new Image();
//     imgArray[2].src = 'images/Topaz.svg';

// function nextImage(element)
// {
//     var img = document.getElementById(element);

//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src == img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }
// var numberOptions = Math.floor(Math.random() * (+120 - +19)) + +19;
// var randomCrystalValue =Math.floor(Math.random() * (+12 - +1)) + +1;
// $("#number-to-guess").text(targetNumber);

// var counter = 0;
// var numWins = 0;
// var numLosses = 0;

// for (var i = 0; i < imgArray.length; i++) {

//   var imageCrystal = $();
//   imageCrystal.addClass("crystal-image");
//   imageCrystal.attr("data-crystalvalue", randomCrystalValue);

//   $("#crystals").append(imageCrystal);
// }

// $(".crystal-image").on("click", function() {

//   // Determining the crystal's value requires us to extract the value from the data attribute.
//   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//   var crystalValue = ($(this).attr("data-crystalvalue"));
//   crystalValue = parseInt(crystalValue);
//   // We then add the crystalValue to the user's "counter" which is a global variable.
//   // Every click, from every crystal adds to the global counter.
//   counter += crystalValue;

//   // All of the same game win-lose logic applies. So the rest remains unchanged.
//   //alert("New score: " + counter);
//   $("#score").append(counter);  

//   if (counter === targetNumber) {
//     numWins++;
//     $("#wins").append(numWins);
//   }

//   else if (counter >= targetNumber) {
//     numLosses++;
//     $("#losses").append(numLosses);  }

// });

$(document).ready(function() {
	var targetNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1RandomInt;
	var crystal2RandomInt;
	var crystal3RandomInt;
	var crystal4RandomInt;

	function newNumbers() {
		targetNumber = Math.floor(Math.random() * 110) + 20;
		crystal1RandomInt = Math.ceil(Math.random() * 12);
		crystal2RandomInt = Math.ceil(Math.random() * 12);
		crystal3RandomInt = Math.ceil(Math.random() * 12);
		crystal4RandomInt = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#targetNumber").text(targetNumber);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalvalue", crystal1RandomInt);
		$("#crystal2").attr("data-crystalvalue", crystal2RandomInt);
		$("#crystal3").attr("data-crystalvalue", crystal3RandomInt);
		$("#crystal4").attr("data-crystalvalue", crystal4RandomInt);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

		//console.log(crystal1RandomInt, crystal2RandomInt, crystal3RandomInt, crystal4RandomInt);
	}

	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".crystalimg").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the crystal values together
	$(".crystalimg").on("click", function() {
		if (totalScore >= targetNumber) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === targetNumber) {
			youWin();
		} else if (totalScore > targetNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});