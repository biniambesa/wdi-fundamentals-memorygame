console.log("up and running....")
var cards = [
    
        { rank: 'Queen',
          suit: 'Hearts',
          image: "images/queen-of-hearts.png"
        },  
        { rank: 'Queen',
          suit: 'Diamonds',
          image: "images/queen-of-diamonds.png"
        },
        { rank: 'King',
          suit: 'Hearts',
          image: "images/king-of-hearts.png"
        }, 
        { rank: 'King',
          suit: 'Diamonds',
          image: "images/king-of-diamonds.png"
      },
]
var cardsInPlay = [];

var checkForMatch = function(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        } else {
        alert("Sorry, try again.");
        }
}
var flipCard = function(cardId){
    console.log("user fliped " + cards[cardId].rank + " of " + cards[cardId].suit)
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length >= 2){
        checkForMatch();
        cardsInPlay = [];
    }
    
    
}