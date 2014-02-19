var expect=require('chai').expect;
var PlayingCard=require('../lib/PlayingCard.js');
describe('PlayingCard',function(){
	describe('Card',function(){
		describe('Constructor',function(){
			it('Should have Suite and Rank Properties',function(){
				var args=['Suite=Diamonds','Rank=8'];
				expect(Suite='Diamonds');
				expect(Rank=8);
			});
		});
	});
	

});