//Makes a deck of cards (eventually)
//Uses the card object(PlayingCard.js) by association
//Used by Dealer.js to start a new deck
module.exports.Deck = function(){
    
    var constructor=function(){};

    constructor.prototype.getCard=function(){
    	var card=new Card('A','Hearts');
    	return card;
    }

    constructor.prototype.getCardsOut=function(){
    	var CardsOut=1;
    	return CardsOut;
    }

    return new constructor();

}