// This is where it all goes :)

cards = [
 {
 	prompt: "How do we become more productive?"
 },
 {
 	prompt: "Name 3 morning activities."
 },
 {
 	prompt: "Name a favorite restaurant."
 },
]

var cardIndex = 0;

window.onload = function() {
	var refreshButton = document.getElementById("refresh-button");
	var cardPrompt = document.getElementById("card-prompt");

	refreshButton.onclick = function() {
		cardIndex = (cardIndex + 1) % cards.length;
		cardPrompt.innerHTML = cards[cardIndex].prompt;
	}
}


