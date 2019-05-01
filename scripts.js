var numSquares= 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Initialize Page
init();

// Function Initialize
function init(){
	// Setup Mode Buttons listeners
	setupModeButtons();
	// Setup Color Square listeners
	setupSquares();
	//Set up initial random colors
	reset();
}

// Setup Mode Buttons listeners function
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//terrenary operator (switches between 3 & 6 squares)
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

// Setup Color Square listeners function
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to sqaures
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color of pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!!!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}

// Reset Function
function reset(){
	//generate all newcolors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of square
	for(var i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// Reset Button listener
resetButton.addEventListener("click", function(){
	reset();
});

// Change colors of squares
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

// Picks a random color from array of colors
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Generate array of random colors based on number
function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random colorand push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
 // Generate random color function
function randomColor() {
	//pick a "red" from 0 - 255"
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255"
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255"
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", "+ g + ", " + b +")";
}