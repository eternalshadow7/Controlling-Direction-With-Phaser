// Declare the variables.
// I made the art for the ship.
var game;
var ship;

window.onload=function(){
	game=new Phaser.Game(800,600, Phaser.AUTO);
	// This adds the state that includes the info for the ship.
	game.state.add('Armada',Armada);
	game.state.start('Armada');
}

var Armada=function(game){};
Armada.prototype={
	preload:function(){
		// This loads the path where the ship image is located.
		game.load.path='../game01/assets/img/';
		game.load.atlas('Ship','Ship.png','Ship.json');
	},
	create: function(){
		// I decided to set the background color to be green.
		this.game.stage.backgroundColor='#00ff00';
		// ReverseKey is a variable set for the key input R.
		// This defines the value of pressing R.
		// The outcome of pressing R is in the Armada state.
		ReverseKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
		// Adding multiple ships.
		shipGroup=this.add.group();
		for(var i=0; i<50;i++){
			// ship=new Ship(game, key, location of x, location of y)
			ship=new Ship(game,'Ship',game.world.randomX, game.world.randomY);
			shipGroup.add(ship);
		}
	},
	update: function(){
	}
	
	
};