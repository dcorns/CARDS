
	//Constructor
	var Card=function(rank,suite){
		function constructor(){}
		constructor.prototype.getRank=function(){
			return rank;
		};
		constructor.prototype.getSuite=function(){
			return suite;
		};
		return new constructor();
	};
