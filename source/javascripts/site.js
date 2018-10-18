// This is where it all goes :)

var cardIndex = 0;
var currentTopic = undefined;

window.onload = function() {
  var topicH1 = document.getElementById("card-title-header");
  var topicDetails = document.getElementById("topics");

  var refreshButton = document.getElementById("refresh-button");
  var cardPrompt = document.getElementById("card-prompt");
  var card = document.getElementById("card");
  var cardBack = document.getElementById("card--back");

  function drawCard(topic) {

    if (topic) {
      for(var i = 0; i < cards.length; i++){
        cardIndex = (cardIndex + 7) % cards.length;
        if (cards[cardIndex].topic == topic) {
          break;
        }
      }
    } else {
      cardIndex = (cardIndex + 7) % cards.length;
    }

    cardPrompt.innerHTML = cards[cardIndex].prompt;
    topicH1.innerHTML = cards[cardIndex].topic;
    
    card.classList.add('card--transform');
    cardBack.classList.add('cardBack--transform');

    setTimeout(
      function(){
        card.classList.remove('card--transform'),
        cardBack.classList.remove('cardBack--transform')
      }, 450
    );
  }

  refreshButton.onclick = function(){
    if (currentTopic){
      drawCard(currentTopic);
    } else {
      drawCard();
    }
  }

  //add listeners to the topic headers to change the card heading text
  document.querySelectorAll(".topics-nav__item").forEach(function(node) {
    node.addEventListener('click', function(card){
      currentTopic = node.innerText;
      drawCard(currentTopic);
      topicDetails.removeAttribute("open")
    })
  });
}
