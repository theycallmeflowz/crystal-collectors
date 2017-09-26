$(document).ready(function() {

	crystals = ['assets/images/carnelian.png','assets/images/citrine.png','assets/images/lazuli.png','assets/images/obsidian.png'];

	var playerNumber = 0;
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses);
	
	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomNumber = Math.ceil(Math.random()*12);
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomNumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomNumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr("data-num", numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', "crystals");
			imageCrystal.addClass("crystalImage");
			$("#crystals").append(imageCrystal);
		}
	}

	function newGame() {

		playerNumber = 0;
        $("#playerScore").text(playerNumber);
        function gen19120 () {
            return parseInt(Math.floor(Math.random() * 102) + 19);   	
    }
        randomNumber = gen19120();
    
            $(".randomScore").html(randomNumber);
          }


		$("img").on('click', function(){
			console.log(this, playerNumber, "watsup")
		    playerNumber = playerNumber + parseInt($(this).data("num"));
		    $("#playerScore").text(playerNumber);

		    if (playerNumber === randomNumber){
		      $("#randomScore").text("Good Job!!!");
		      wins ++;
		      $("#wins").text(wins);
		      console.log(wins);
		      $("#crystals").empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( playerNumber > randomNumber) {
		        $("#randomScore").text("You lost!");
		        losses ++;
		        $("#loss").text(losses);
		        console.log(losses);
		        $("#crystals").empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

);