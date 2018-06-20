//JS file
(function() {
	console.log("JS file loaded");

	//Vars
var num1 = document.querySelector("input");
var num2 = document.querySelector("#input2");
var equals = document.querySelector("#trigger");
var outcome = document.querySelector("#value");
var selPlus = document.querySelector("#plus");
var selMinus = document.querySelector("#minus");
var userChoice = "";
//console.log(num1);
//console.log(num2);
//console.log(equals);
//console.log(outcome);
//console.log(selPlus);
//console.log(selMinus);

	//Functions
	function doStuff() {
		var total = "";
		console.log(userChoice);
		//console.log("from addStuff");
		//console.log(num1.value);
		//console.log(num2.value);
		if(userChoice == "add"){
			total = parseInt(num1.value) + parseInt(num2.value);
		}else{
			total = parseInt(num1.value) - parseInt(num2.value);
		}
		//console.log(total);
		outcome.innerHTML = total;
	}

	function selCal(evt) {
		//console.log("From selCal");
		/*if(selPlus.innerHTML == "+") {
			console.log("User clicked +");
		}

		if(selMinus.innerHTML == "-"){
			console.log("User clicked -");
		}*/
		//console.log(evt.currentTarget.id);
		if(evt.currentTarget.id == "plus"){
			console.log("add");
			userChoice = "add";
		}else{
			console.log("sub");
			userChoice = "sub";
		}
	}


	//Listeners
	equals.addEventListener("click", doStuff, false);
	selPlus.addEventListener("click", selCal, false);
	selMinus.addEventListener("click", selCal, false);


})();