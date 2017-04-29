function Ship(game, key,x,y){
	Phaser.Sprite.call(this, game,x,y,key);
	this.x=game.world.randomX;
	this.y=game.world.randomY;
	game.physics.enable(this);
	this.body.velocity.x=200;
}
// This specifies the prefab's prototype and constructor.
Ship.prototype=Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor=Ship;

Ship.prototype.update=function(){
	// If the user presses the R button, and the ships have a velocity of 200, the direction will be the opposite.
	if(ReverseKey.justPressed() && this.body.velocity.x==200){
		this.body.velocity.x=-200;
    }
	// If the user presses the R button, and the ships have a velocity of -200, the direction will be the opposite.
	else if(ReverseKey.justPressed() && this.body.velocity.x==-200){
		this.body.velocity.x=200;
    }
	// This checks whether the ships are off the screen. If they are, then they will appear in the opposite side.
	if(this.x + this.width/2 < 0) {
			this.x = game.width + this.width/2;
		} else if(this.x - this.width/2 > game.width) {
			this.x = 0 - this.width/2;
		} else if(this.y + this.height/2 < 0) {
			this.y = game.height + this.height/2;
		} else if(this.y - this.height/2 > game.height) {
			this.y = 0 - this.height/2;
		}
	
	
}

	




	