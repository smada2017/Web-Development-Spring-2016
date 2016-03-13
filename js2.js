var OGstateArray = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"];
	var stateArray = OGstateArray.slice()
	var tmr;
	var paused = false;
	numRight = 0;
	highscore = 0;
		function startTimer(){
			document.getElementById("stateInput").removeAttribute("disabled");
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
			document.getElementById("stateInput").setAttribute("disabled", true);
			paused = true;
			clearInterval(tmr);
		}
		function endGame(){
			stateArray = OGstateArray.slice()
			document.getElementById("output").innerHTML = numRight + "/" + "50" + " = " + (numRight*2) + "% correct."
			if(numRight>highscore)
			{
				highscore = numRight
				document.getElementById("highscore").innerHTML = "High score: " + highscore;
			}
			numRight = 0;
			document.getElementById("timerDiv").innerHTML = "60 seconds.";
			document.getElementById("stateInput").value = "";
			pauseTimer()
			paused = false;
		}
		function checkState(){
			var curWord = document.getElementById("stateInput");
			for(var x = 0; x < stateArray.length; x++)
			{
				if(curWord.value.toLowerCase() == stateArray[x].toLowerCase() && curWord.value != "")
				{
					numRight++;
					var entry = document.createElement('li');
					entry.appendChild(document.createTextNode(stateArray[x]));
					var divTag = document.getElementById("output");
					divTag.appendChild(entry)
					stateArray[x] = ""
					curWord.value = ""
				}
			}

		}