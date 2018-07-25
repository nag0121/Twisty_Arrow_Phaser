var canShoot = true;
var arrow;
var popop = "out";
var gameOptions = {

    // target rotation speed, in degrees per frame
    rotationSpeed: 2,

    // knife throwing duration, in milliseconds
    throwSpeed: 150,

    // minimum angle between two knives
    minAngle: 7,

    numArrow:10
}
class CreateState extends Phaser.State {

    create() {

        this.physics.startSystem(Phaser.Physics.Arcade); //enabling arcade physics for the game

        // this.stage.backgroundColor = '#576987';
        this.bg = this.add.image(0,0,'bg'); //game background color
        this.bg.width = this.game.width;
        this.bg.height = this.game.height;

        this.arrowGroup = this.add.group(); //arrow group that rotates with target

        this.bow = this.add.sprite(this.world.centerX, this.game.height - 60, 'bow'); //bow
        this.bow.anchor.set(0.5);
        this.bow.angle = 45;

        this.bow.inputEnabled = true; //input enabled for bow
        this.bow.input.pixelPerfectClick = true; //
        // window.addEventListener("click",()=>{
        //     this.arrowThrow();
        // },true);
        this.bg.inputEnabled = true;
        this.bg.events.onInputDown.add(this.arrowThrow, this);
        // this.bow.events.onInputDown.add(this.arrowThrow, this);



        this.arrow = this.add.sprite(this.world.centerX, this.game.height - 160, 'arrow');
        this.arrow.anchor.set(0.5, 0);
        // this.arrow.scale.set(0.7);

        this.arrow_next = this.add.sprite(this.world.centerX, this.game.height-30, 'arrow');
        this.arrow_next.anchor.set(0.5, 0);

        this.target = this.add.sprite(this.world.centerX, this.game.height/4, 'target');
        this.target.anchor.set(0.5);
        this.target.scale.set(0.4);

        
        
        this.physics.enable([this.target, this.arrow], Phaser.Physics.ARCADE);

        this.arrow.body.collideWorldBounds = true;

        this.score = this.add.text(0, 0, null, {
            fill:"#FFFFFF"
        })
        this.score.anchor.set(0.5);
        this.score.alignIn(this.target,Phaser.CENTER);
    }
    update() {

              
        if(gameOptions.numArrow == 0){
            popop = "Level 2";
            this.showPopUp('next_level')
        }
        this.target.angle += gameOptions.rotationSpeed;

        var children = this.arrowGroup.getAll();
        this.score.text = gameOptions.numArrow;

        for (var i = 0; i < children.length; i++) {

            // rotating the knife
            children[i].angle += gameOptions.rotationSpeed;

            // turning knife angle in radians
            var radians = this.math.degToRad(children[i].angle + 90);
            // trigonometry to make the knife rotate around target center
            children[i].x = this.target.x + (this.target.width - 15) * Math.cos(radians);

            children[i].y = this.target.y + (this.target.width - 15) * Math.sin(radians);
            // gameOptions.numArrow--;

        }
    }


    //  this.physics.arcade.collide(this.arrow, this.target, this.collisionHandler, null, this);

    collisionHandler() {

        this.validThrough = true;
        var children = this.arrowGroup.getAll();

        // looping through rotating knives
        for (var i = 0; i < children.length; i++) {

            // is the knife too close to the i-th knife?
            if (Math.abs(Phaser.Math.getShortestAngle(this.target.angle, children[i].impactAngle)) < gameOptions.minAngle) {

                // this is not a legal hit
                this.validThrough = false;

                // no need to continue with the loop
                break;
            }
        }
        if (this.validThrough) {
            gameOptions.numArrow--;
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
            this.arrow.y = this.game.height - 160;

        } else {
            this.Losttween = this.add.tween(this.arrow);
            this.Losttween.to({ x: this.world.centerX + 260, y: this.game.height - 60 }, 500);
            this.Losttween.start();
            this.Losttween.onComplete.add(() => {
                this.bow.inputEnabled = false;
                this.arrow.kill();
                this.showPopUp('replay');
                // this.state.restart();
                canShoot = true;
            }, this);

        }

    }

    arrowThrow() {


        if (canShoot) {

            canShoot = false;

            this.twee = this.add.tween(this.arrow);
            this.twee.to({ y: this.target.y + this.target.width/2 }, gameOptions.throwSpeed);
            this.twee.start();

            this.twee.onComplete.add(this.collisionHandler, this);
        }

    }
    showPopUp(replay_next) {
        this.popup = this.add.sprite(this.world.centerX, this.world.centerY, 'popup');
        this.popup.anchor.set(0.5);
        this.popupText = this.add.text(this.world.centerX, this.world.centerY, popop, {
            fill: "#000000",
        } );
        this.popupText.anchor.set(0.5);

        this.popupText.alignIn(this.popup, Phaser.TOP_CENTER);

        this.popupText.inputEnabled = true;
        gameOptions.rotationSpeed = 0;

        
        this.replay = this.add.sprite(this.world.centerX, this.world.centerY, replay_next);
        this.replay.alignIn(this.popup, Phaser.CENTER);
        this.replay.inputEnabled = true;
        this.replay.events.onInputDown.add(()=>{
            this.state.restart();
            gameOptions.rotationSpeed = 2;
            gameOptions.numArrow = 10;
        },this);

        this.home = this.add.sprite(this.world.centerX, this.world.centerY, 'home');    
        this.home.alignIn(this.popup, Phaser.BOTTOM_CENTER);
        this.home.inputEnabled = true;
        this.home.events.onInputDown.add(()=>{
            this.state.start('HomeState');
            gameOptions.rotationSpeed = 2;
        },this);
 
    }

}

export default CreateState;