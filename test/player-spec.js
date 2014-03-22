var expect = require('chai').expect,
  Player = require('../lib/player').Player;
  
describe('Players', function() {
  'use strict';
  var player;

  beforeEach(function(){
    player = new Player('Jessie James');
  });

  it('have a name', function() {
    expect(player.name).to.equal('Jessie James');
  });
  
});
