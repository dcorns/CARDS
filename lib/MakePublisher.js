var publisher=require('PubSub.js');
var expect=require('chai').expect;
module.exports.MakePublisher=(function(obj){
	var i;
    for (i in PubSub.publisher) {
        if (PubSub.publisher.hasOwnProperty(i) && typeof PubSub.publisher[i] === "function") {
            obj[i] = PubSub.publisher[i];
        }
    }
    obj.subscribers = {any: []};
}
});