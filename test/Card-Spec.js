//Test Card object for imutibility
//this line includes the expect function from the chai library and by choice assigns it the same name
var expect=require('chai').expect;
var Card=require('../lib/PlayingCard.js').Card;
describe('Card Tests',function(){
	'use strict';
	var card;

	beforeEach(function(){
		card=new Card('K','Hearts');
	});

	
		describe('constructor',function(){
			it('Should be truthy (exists)',function(){
				var varis=expect(card).to.be.an.object;
			});
			it('Should not have a rank property', function(){
				expect(card).to.not.have.property('rank');
			});
			it('card rank property in undefined', function(){
				var heresosjhint=expect(card.rank).to.be.an.undefined;
			});
			it('card should not have a suite property',function(){
				expect(card).to.not.have.property('suite');
			});
			it('card suite property is undefined',function(){
				var doesnotfail=expect(card.suite).to.be.an.undefined;
			});
			it('card getRank returns rank',function(){
				expect(card.getRank()).to.equal('K');
			});
			it('can\'t change the card rank',function(){
				card.rank='9';
				expect(card.getRank()).to.equal('K');
			});
			it('card getSuite returns suite',function(){
				expect(card.getSuite()).to.equal('Hearts');
			});
			it('can\'t change the card suite',function(){
				card.suite='Spades';
				expect(card.getSuite()).to.equal('Hearts');
			});
		});
	
	

});