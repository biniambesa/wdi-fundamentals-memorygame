console.log("up and running....")
var cards = ["Queen", "Queen", "King", "King"]
var cardsInPlay = [];

var checkForMatch = function(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        } else {
        alert("Sorry, try again.");
        }
}
var flipCard = function(cardId){
    console.log("user fliped " + cards[cardId])
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length >= 2){
        checkForMatch();
        cardsInPlay = [];
    }
    
    
}