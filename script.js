//Find the Penguins Game Script
//Andrew J. Noest 1/23/20

// Event listener for page load which runs the newGame() function
window.addEventListener("load", newGame);

// Event listener for the Play Again button
document.getElementById("button").addEventListener("click", function() {
	window.location.reload();
	
})

// This function will generate a random number between 2 and 10
// That number represents the DIV the yeti will hide in
// That DIV will gain a ID of "yeti" and click event listener

function newGame() {
	var randNum = Math.floor(Math.random() * 9) + 2;
	document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");
	document.getElementById("yeti").addEventListener("click", function() {
		window.alert("ROWRRRRR!! I AM THE YETI!!!! YOU LOSE!!!!!");
		document.getElementById("audio").play();
	});
}