var expect=require('chai').expect;
var Deck=require('../lib/Deck').Deck;
var Card=require('../lib/PlayingCard').Card;
describe('Define Deck Tests',function(){
	'use strict';
	var deck;
	beforeEach(function(){
		deck=new Deck();
		
	});

	
it('can make a card',function(){
deck.getCard(new Card('5','Clubs'));
var T1=expect(card).to.be.an.object;
});


it('have a count of cards called size',function(){
	deck.addCard(new Card('K','Hearts'));
	expect(deck.size()).to.equal(1);
});

it('can check the inclusion of a card',function(){
	var T2=expect(deck.includes('K')).to.be.false;
});

it('should start with 13 Hearts',function(){

});

it('should start with 13 Diamonds');

it('should start with 13 Spades');	

it('should start with 13 Clubs');

it('should reset card amounts');

it('should have a different rank A-K for all Suites');

it('It should return a card object');

});