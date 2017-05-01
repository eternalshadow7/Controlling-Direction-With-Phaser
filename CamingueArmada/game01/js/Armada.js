// This includes properties of the ships like the scale, position, and velocity
function Ship(game, key,scale,position,velocity){
	Phaser.Sprite.call(this, game,game.rnd.integerInRange(64,game.width-64),game.rnd.integerInRange(64,game.width-64), key);
	this.scale.x=game.rnd.integerInRange(1,3);
	this.scale.y=game.rnd.integerInRange(1,3);
	this.position.x=game.world.randomX;
	this.position.y=game.world.randomY;
	game.physics.enable(this);
	this.body.velocity.x=game.rnd.integerInRange(-200,200);
}
// This specifies the prefab's prototype and constructor.
Ship.prototype=Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor=Ship;

Ship.prototype.update=function(){
	// If the user presses the R button, and the ships have a velocity of over 0, reverse direction.
	if(ReverseKey.justPressed() && this.body.velocity.x>0){
		this.body.velocity.x=game.rnd.integerInRange(-200,-1);
    }
	// If the user presses the R button, and the ships have a velocity of under 0, reverse the direction.
	else if(ReverseKey.justPressed() && this.body.velocity.x<0){
		this.body.velocity.x=game.rnd.integerInRange(1,200);
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

	




	