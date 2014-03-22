exports.Deck = function() {
  var cards = [];

  var constructor = function() {}
    constructor.prototype.add = function(card) {
      cards.push(card);
    }
    constructor.prototype.size = function() {
      return cards.length
    }
    constructor.prototype.includes = function(suite) {
      return (this.size() > 0 );
    }
  return new constructor();
}
