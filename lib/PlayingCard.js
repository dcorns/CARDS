
	//For creating a new card
	//Used by association in Deck.js
	module.exports.Card=function(rank,suite){
		var constructor=function(){}
		constructor.prototype.getRank=function(){
			return rank;
		}
		constructor.prototype.getSuite=function(){
			return suite;
		}
		return new constructor();
	}
