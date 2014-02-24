module.exports.User=function(name){
	var constructor=function(){};

	var hand=[];
	var deck=new Deck();

	constructor.prototype.getName=function(){
		return name;
	}
	
	constructor.prototype.getHand=function(){
		
		return hand;
	}
	constructor.prototype.getCard=function(){
		//hand.push(deck.getCard);
		return deck.getCard();

	}

	return new constructor();

}