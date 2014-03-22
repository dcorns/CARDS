exports.Dealer = function(deck){
    'use strict';
    var hands = [];
    var constructor = function() {};

    constructor.prototype.deal = function(hand){
        	hands.push(hand);
    };

    constructor.prototype.numberOfCardsOut = function(){
    	return hands.length;
    };
    return new constructor();
};