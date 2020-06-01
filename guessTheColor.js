//keep track the squars
var numberOfSquares = 6;
//random color  picked up
var pickedColor;
var colors = [];
//select squars
var squars = document.querySelectorAll(".square");
//select colordisplay
var colorDisplay = document.getElementById("colorDisplay");
//selector for message display
var messageDisplay = document.querySelector("#message");
//select reset button
var resetButton = document.getElementById("reset");
//diffculty buttons
var modeButtons = document.querySelectorAll(".mode");
//clicking reset button will reset colors
var h1 = document.querySelector("h1");

init();

function init(){
	setupModeButtons();
	setupSquares()
	reset();
}
function setupModeButtons(){
	//mode buttons for hard or easy
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squars.length; i++){
		//add click listener to the squares
		squars[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				//change reset button text after guessing correct
				resetButton.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else {
				//fade the color to the background color
				this.style.backgroundColor = "#232323";
				//display message
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}
function reset(){
	//console.log(numberOfSquares);
	colors = generateRandomColors(numberOfSquares);
	//pick new colors from array
	pickedColor = pickColor();
	//change color display to matched picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of the squares
	for(var i = 0; i < squars.length; i++){
		if(colors[i]){
			squars[i].style.backgroundColor = colors[i];
			squars[i].style.display = "block";
		}
		else {
			squars[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}
//reset to random color after clicking
resetButton.addEventListener("click",function(){
	reset();
});

function changeColor(color) {
	// loop through all the squares
	for(var i = 0; i < squars.length; i++){
		//change to the matched color
		squars[i].style.background = color;
	}
}

// random colors from array
function pickColor(){
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}

//generate random colors
function generateRandomColors(number){
	//make array 
	var arr = [];
	//add number of random colors to the array
	for(var i = 0 ; i < number; i++){
		// generate random color and push it to the array
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor(){
	// generate for red
	var r = Math.floor(Math.random() * 256);
	
	//generate for green
	var g = Math.floor(Math.random() * 256);
	
	//generate for blue
	var b = Math.floor(Math.random() * 256);
	
	//rgb(r, g, b);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}