var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorRGB = document.querySelector("#colorRGB");
var gameMessage = document.querySelector("#gameMessage");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



// To display and change the rgb number in html page
colorRGB.textContent = colorPicked;

// loop over the color and click detetion function
for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
    	var colorClicked = this.style.background;
    	if (colorClicked === colorPicked){
    		gameMessage.textContent = "Correct!";
    		gameMessage.style.color = "steelblue";
    		changedAllColor();
    		reset.textContent = "Play Again?";
    	}
    	else{
    		this.style.background = "#232323";
    		gameMessage.textContent = "Try Again!";
    	}
    })
}
// the reset function
reset.addEventListener("click", function(){
	colors = generateRandomColor(numSquares);
	colorPicked = pickColor();
	colorRGB.textContent = colorPicked;
	reset.textContent = "New Colors";
	gameMessage.textContent = " ";
	h1.style.background = "steelblue";
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
})
// the functon to assigned colors
function changedAllColor(){
	for (var i =0; i < squares.length; i++){
		squares[i].style.background = colorPicked;
		h1.style.background = colorPicked;
	}
}
// create random numbers based on the range of the color array
function pickColor(){
	return colors[Math.floor(Math.random()* colors.length)];
}
//get random rgb number based on the need of num of color
function generateRandomColor(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");

	}
	return arr;
}
// add event listener to the hard button
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	colorPicked = pickColor();
	colorRGB.textContent = colorPicked;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
})
// // add event listener to the easy button
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	colorPicked = pickColor();
	colorRGB.textContent = colorPicked;
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})