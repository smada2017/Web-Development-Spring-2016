var OGdwarfArray = ["Doc", "Sleepy", "Happy", "Bashful", "Sneezy", "Grumpy", "Dopey"];
	var dwarfArray = OGdwarfArray.slice()
	var tmr;
	var paused = false;
	numRight = 0;
	highscore = 0;
		function startTimer(){
			document.getElementById("dwarfInput").removeAttribute("disabled");
			document.getElementById("start").disabled = true;
			if(paused == false)
			{
				document.getElementById("output").innerHTML = "";
			}
			tmr = setInterval(function(){
				var divTag = document.getElementById("timerDiv");
				var timeVal = parseInt(divTag.innerHTML); //grabs string
				//console.log(timeVal); //print the value
				divTag.innerHTML = (timeVal-1) + " seconds left";
				if(timeVal == 0)
					endGame()
							},1000);
						}
		function pauseTimer(){
			document.getElementById("start").disabled = false;
			document.getElementById("dwarfInput").setAttribute("disabled", true);
			paused = true;
			clearInterval(tmr);
		}
		function endGame(){
			dwarfArray = OGdwarfArray.slice()
			document.getElementById("output").innerHTML = parseInt(100*numRight/7) + "% correct."

			numRight = 0;
			document.getElementById("timerDiv").innerHTML = "60 seconds.";
			document.getElementById("dwarfInput").value = "";
			pauseTimer()
			paused = false;
		}
		function checkdwarf(){
			var curWord = document.getElementById("dwarfInput");
			for(var x = 0; x < dwarfArray.length; x++)
			{
				if(curWord.value.toLowerCase() == dwarfArray[x].toLowerCase() && curWord.value != "")
				{
					numRight++;
					var entry = document.createElement('li');
					entry.appendChild(document.createTextNode(dwarfArray[x]));
					var divTag = document.getElementById("output");
					divTag.appendChild(entry)
					dwarfArray[x] = ""
					curWord.value = ""
				}
			}
			if(numRight == 7){
				endGame();
				
			}

		}