var expect=require('chai').expect,
Player=require('../lib/player').Player;

describe('Players',function(){
	'use strict';
	var player;

	beforeEach(function(){
		player=new Player('Mississipi Bob');
	});

	it('have a name',function(){
		expect(player.name).to.equal('Mississipi Bob');
	});

it('can recieve a cards');
it('can return cards');
});