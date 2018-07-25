export default class HomeState extends Phaser.State {

    create() {

        // this.home_state = this.add.sprite(0, 0, "home_screen");
        //this.home_state.inputEnabled = true;
        this.home_state_play = this.add.sprite(this.world.centerX - this.world.centerX / 4, this.world.centerY - 90, "play_game");
        this.home_state_play.anchor.set(0.5, 0.5);
        this.home_state_play.inputEnabled = true;

<<<<<<< HEAD
        this.gameMuteBtn = this.add.button(this.game.width - 60, 30, 'mute_sound', this.gameMuteFunction, this);
        this.gameMuteBtn.anchor.set(0.5, 0.5);
        //this.gameMuteBtn.visible = true;
        this.gameUnMuteBtn = this.add.button(this.game.width - 60, 30, 'unmute_sound', this.gameMuteFunction, this);
=======
        this.gameMuteBtn = this.add.button(this.world.centerX + this.world.centerX / 4, this.world.centerY / 6, 'mute_sound', this.gameMuteFunction, this);
        this.gameMuteBtn.anchor.set(0.5, 0.5);
        //this.gameMuteBtn.visible = true;
        this.gameUnMuteBtn = this.add.button(this.world.centerX + this.world.centerX / 4, this.world.centerY / 6, 'unmute_sound', this.gameMuteFunction, this);
>>>>>>> b5843dec1fc1627b0e37e6cd6aea09322f437252
        this.gameUnMuteBtn.anchor.set(0.5, 0.5);
        this.gameUnMuteBtn.visible = false;

        this.twisty_icon = this.add.sprite(this.world.centerX - this.world.centerX / 4, this.world.centerY - 200, "twisty_name");
        this.twisty_icon.anchor.set(0.5, 0.5);

        this.home_state_play.events.onInputDown.add(() => {
            this.state.start("LevelsState");
        });

        // Playing Background Music

        this.game_music = this.add.audio('game_bg_music');
        this.game_music.play();


        let style = {
            font: "32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        this.text_play = this.add.text(0, 0, "Play", style);
        this.text_play.setTextBounds(this.world.centerX - this.world.centerX / 4, this.world.centerY);
        this.text_play.inputEnabled = true;

        this.text_play.events.onInputDown.add(() => {
            this.state.start("LevelsState");
        });

    }

    gameMuteFunction() {

        if (this.gameMuteBtn.visible) {
            this.gameMuteBtn.visible = false;
            this.gameUnMuteBtn.visible = true;
            this.game_music.mute = true; // to mute all sounds in game 


        } else {
            this.gameMuteBtn.visible = true;
            this.gameUnMuteBtn.visible = false;
            this.game_music.mute = false; // to unmute all sounds in game
        }
    }

}