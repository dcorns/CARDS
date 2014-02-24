var expect=require('chai').expect;
var Deck=require('../lib/Deck.js').Deck;
var Card=require('../lib/PlayingCard.js').Card;
var Dealer=require('../lib/Dealer.js').Dealer;
var Player=require('../lib/player.js').Player;
describe('Dealer Tests',function(){
	'use strict';
	var dealer, deck;

	beforeEach(function(){
		deck=new Deck();
		dealer=new Dealer(deck);
	});

	
	it('It can deal cards', function() {
      var card = new Card('10','Spades');
      var player = new Player('Maverick');
      deck.addCard(card);
      var T1=expect(
        dealer.deal({card: card, player: player})
        ).to.be.true; //jshint ignore:line
      expect(dealer.cardsout()).to.equal(1);
    });

    it('can recieve cards');
    it("can see cards kept"); //jshint ignore: line
	
});