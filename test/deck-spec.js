var expect=require('chai').expect,
	Deck=require('../lib/deck').Deck,
	Card=require('../lib/card').Card;

describe('Define Deck Tests',function(){
	'use strict';
	var deck;
	beforeEach(function(){
		deck=new Deck();	
	});

	it('have a count of cards called size',function(){
		deck.add(new Card('K','Hearts'));
		expect(deck.size()).to.equal(1);
	});

});
