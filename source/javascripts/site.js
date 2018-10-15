// This is where it all goes :)

var cardIndex = 0;



window.onload = function() {
  var topicH1 = document.getElementById("card-topic-header");

  var refreshButton = document.getElementById("refresh-button");
  var cardPrompt = document.getElementById("card-prompt");

  function drawCard() {
  cardIndex = (cardIndex + 1) % cards.length;
  cardPrompt.innerHTML = cards[cardIndex].prompt;
}

refreshButton.onclick = drawCard;

//add listeners to the topic headers to change the card heading text
document.querySelectorAll(".topic__link").forEach(function(node) {
  node.addEventListener('click', function(){
    topicH1.innerText = node.innerText;
    drawCard();
  })
});
}
