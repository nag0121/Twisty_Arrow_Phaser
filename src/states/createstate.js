var canShoot = true ;
var arrow;
var gameOptions = {

    // target rotation speed, in degrees per frame
    rotationSpeed: 3,

    // knife throwing duration, in milliseconds
    throwSpeed: 150,

    // minimum angle between two knives
    minAngle: 7
}
class CreateState extends Phaser.State {

    create () {

        this.physics.startSystem(Phaser.Physics.Arcade); //enabling arcade physics for the game

        this.stage.backgroundColor = '#ffffff';//game background color

        this.arrowGroup = this.add.group(); //arrow group that rotates with target
       
        this.bow = this.add.sprite(this.world.centerX, this.game.height - 60, 'bow'); //bow
        this.bow.anchor.set(0.5);
        this.bow.scale.set(0.35);
        this.bow.angle = 135;
    
        this.bow.inputEnabled = true; //input enabled for bow
        this.bow.input.pixelPerfectClick = true; //
        // window.addEventListener("click",()=>{
        //     this.arrowThrow();
        // },true);
        this.bow.events.onInputDown.add(this.arrowThrow,this);

        

        this.arrow = this.add.sprite(this.world.centerX, this.game.height - 130, 'arrow');
        this.arrow.anchor.set(0.5,0);
        // this.arrow.scale.set(0.7);

        this.target = this.add.sprite(this.world.centerX, this.game.height - 1100, 'target');
        this.target.anchor.set(0.5);
        this.target.scale.set(0.6);

        this.physics.enable( [ this.target, this.arrow ], Phaser.Physics.ARCADE);
        
        this.arrow.body.collideWorldBounds = true;

    }
     update () {
         this.target.angle += gameOptions.rotationSpeed;

         var children = this.arrowGroup.getAll();

         
         for (var i = 0; i < children.length; i++){

            // rotating the knife
            children[i].angle += gameOptions.rotationSpeed;

            // turning knife angle in radians
            var radians = this.math.degToRad(children[i].angle + 90);
            // trigonometry to make the knife rotate around target center
            children[i].x = this.target.x + (this.target.width) * Math.cos(radians);

            children[i].y = this.target.y + (this.target.width) * Math.sin(radians);

          }
        }
        

        //  this.physics.arcade.collide(this.arrow, this.target, this.collisionHandler, null, this);

     collisionHandler () {

        this.validThrough = true;
        var children = this.arrowGroup.getAll();

        // looping through rotating knives
        for (var i = 0; i < children.length; i++){

            // is the knife too close to the i-th knife?
            if(Math.abs(Phaser.Math.getShortestAngle(this.target.angle, children[i].impactAngle)) < gameOptions.minAngle){

                // this is not a legal hit
                this.validThrough = false;

                // no need to continue with the loop
                break;
            }
        } 
        if(this.validThrough){

            // player can now throw again
            canShoot = true;

            // adding the rotating knife in the same place of the knife just landed on target
            arrow = this.add.sprite(this.arrow.x, this.arrow.y, "arrow");
            arrow.anchor.set(0.5);
            // impactAngle property saves the target angle when the knife hits the target
            arrow.impactAngle = this.target.angle;

            // adding the rotating knife to knifeGroup group
            this.arrowGroup.add(arrow);

            // bringing back the knife to its starting position
            this.arrow.y = this.game.height - 60;
        }
        else {
            this.Losttween = this.add.tween(this.arrow);
            this.Losttween.to({x:this.world.centerX + 260,y:this.game.height - 60},500);
            this.Losttween.start(); 
            this.Losttween.onComplete.add(()=>{
                this.state.restart();
                canShoot = true;
            },this);
            
        }       
       
    }

    arrowThrow () {
        

        if (canShoot) {

            canShoot = false;

            this.twee = this.add.tween(this.arrow);
            this.twee.to({y:this.target.y + this.target.width/2},gameOptions.throwSpeed);
            this.twee.start();

            this.twee.onComplete.add(this.collisionHandler,this);
        }        
            
    }
    

}

export default CreateState; 