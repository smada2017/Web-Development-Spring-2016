
		//grab both numbers, add them yp, and display them.
		function checkAnswer(){
			var n1 = document.getElementById("num1").value;
			if(n1 == "Doc"){
				document.getElementById("one").innerHTML = "Doc";
				document.getElementById("num1").value = "";
			}
			if(n1 == "Grumpy"){
				document.getElementById("two").innerHTML = "Grumpy";
				document.getElementById("num1").value = "";
			}
			if(n1 == "Happy"){
				document.getElementById("three").innerHTML = "Happy";
				document.getElementById("num1").value = "";
			}
			if(n1 == "Sleepy"){
				document.getElementById("four").innerHTML = "Sleepy";
				document.getElementById("num1").value = "";
			}
			if(n1 == "Bashful"){
				document.getElementById("five").innerHTML = "Bashful";
				document.getElementById("num1").value = "";
			}
			if(n1 == "Sneezy"){
				document.getElementById("six").innerHTML = "Sneezy";
				document.getElementById("num1").value = "";
			}
			if(n1 == "Dopey"){
				document.getElementById("seven").innerHTML = "Dopey";
				document.getElementById("num1").value = "";
			}



		}
		function startFunction(){
			document.getElementById("num1").removeAttribute("disabled");
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

		function pause(){
			document.getElementById("start").disabled = false;
			document.getElementById("num1").setAttribute("disabled", true);
			paused = true;
			clearInterval(tmr);
		}
		// function startFunction(){

		// 	clock = setInterval(function(){
		// 		var divTag = document.getElementById("TimerDiv");
		// 		var timeVal = parseInt(divTag.innerHTML);
		// 		timeVal = timeVal -1;
		// 		document.getElementById("TimerDiv").innerHTML = timeVal.toString();
		// 		if(timeVal == 0){
		// 			clearInterval(clock);
		// 			alert("Stop")
		// 		}
		// 	},1000)
		// }
		// function pause(){
		// 	clearInterval(clock);
		// }
		function reset(){
			clearInterval(clock);

			document.getElementById("TimerDiv").innerHTML = "60";
			document.getElementById("one").innerHTML = "";
			document.getElementById("two").innerHTML = "";
			document.getElementById("three").innerHTML = "";
			document.getElementById("four").innerHTML = "";
			document.getElementById("five").innerHTML = "";
			document.getElementById("six").innerHTML = "";
			document.getElementById("seven").innerHTML = "";
			document.getElementById("result").innerHTML = "";
			clock1 = setInterval(function(){
				var divTag = document.getElementById("TimerDiv");
				var timeVal = parseInt(divTag.innerHTML);
				timeVal = timeVal -1;
				document.getElementById("TimerDiv").innerHTML = timeVal.toString();
				if(timeVal == 0){
					clearInterval(clock);
					alert("Stop")
				}
			},1000)
			// document.getElementById("reset").disabled = true;
		}
		function myFunction() {
    		clearInterval(clock);
    		alert("Stop");
    		clearInterval(clock);
		}
