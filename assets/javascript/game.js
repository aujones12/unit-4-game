$(document).ready(function() {
	var targetNumber = 0;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1RandomInt;
	var crystal2RandomInt;
	var crystal3RandomInt;
	var crystal4RandomInt;

	function newNumbers() {
		targetNumber = Math.floor(Math.random() * 120) + 20;
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
		$("#crystal1").attr("data-crystalvalue-1", crystal1RandomInt);
		$("#crystal2").attr("data-crystalvalue-2", crystal2RandomInt);
		$("#crystal3").attr("data-crystalvalue-3", crystal3RandomInt);
		$("#crystal4").attr("data-crystalvalue-4", crystal4RandomInt);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");
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

	$("#crystal1RandomInt").on("click", function() {
		if (totalScore >= targetNumber) {
			return totalScore;
		}

		var crystalValue1 = $(this).attr("data-crystalvalue-1");
		crystalValue1 = parseInt(crystal1RandomInt);
		totalScore += crystalValue1;
		$("#totalScore").text(totalScore);

		if (totalScore === targetNumber) {
			youWin();
		} else if (totalScore > targetNumber) {
			youLose();
		}
	});

	$("#crystal2RandomInt").on("click", function() {
		if (totalScore >= targetNumber) {
			return totalScore;
		}

		var crystalValue2 = $(this).attr("data-crystalvalue-2");
		crystalValue2 = parseInt(crystal2RandomInt);
		totalScore += crystalValue2;
		$("#totalScore").text(totalScore);

		if (totalScore === targetNumber) {
			youWin();
		} else if (totalScore > targetNumber) {
			youLose();
		}
	});
	
	$("#crystal3RandomInt").on("click", function() {
		if (totalScore >= targetNumber) {
			return totalScore;
		}

		var crystalValue3 = $(this).attr("data-crystalvalue-3");
		crystalValue3 = parseInt(crystal3RandomInt);
		totalScore += crystalValue3;
		$("#totalScore").text(totalScore);

		if (totalScore === targetNumber) {
			youWin();
		} else if (totalScore > targetNumber) {
			youLose();
		}
	});

	$("#crystal4RandomInt").on("click", function() {
		if (totalScore >= targetNumber) {
			return totalScore;
		}

		var crystalValue4 = $(this).attr("data-crystalvalue-4");
		crystalValue4 = parseInt(crystal4RandomInt);
		totalScore += crystalValue4;
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