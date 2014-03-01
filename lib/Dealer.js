//Dealer takes on a new deck by association (Deck.js) which has the cards and the method for dealing them.
module.exports.Dealer=function(){

	var constructor=function(){};
//Get a fresh Deck for dealer when initialized using association
	var deck=new Deck();
	var players=[];
	
	constructor.prototype.cardsLeft=function(){

		return deck.getCardsOut();
	}
	constructor.prototype.dealCard=function(){
		for(var x=0;x<players.length;x++){
			players[x].getCard();
		}
	}
	constructor.prototype.playerAdd=function(Player){
		players.push(Player);

	}
	constructor.prototype.showPlayers=function(){
		return players[0];
	}

return new constructor();

}