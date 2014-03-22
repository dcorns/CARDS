var expect = require('chai').expect,
  Deck = require('../lib/deck').Deck,
  Card = require('../lib/card').Card,
  Player = require('../lib/player').Player,
  Dealer = require('../lib/dealer').Dealer;

describe('Dealer', function() {
  'use strict';
  var dealer, deck;

  beforeEach(function(){
    deck = new Deck();
    dealer = new Dealer(deck);
  });

  describe('keeps track of cards that are left', function() {
    it('can deal cards to player', function() {
      var card = new Card('Jack','Heart');
      var player = new Player('Minisota Fats');
      dealer.deal({card: card, player: player});
      expect(dealer.numberOfCardsOut()).to.equal(1);
    });
  });
});