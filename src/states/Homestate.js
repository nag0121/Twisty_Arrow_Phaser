export default class Home_state extends Phaser.State {

    create() {

        this.home_state = this.add.sprite(0, 0, "home_screen");
        //this.home_state.inputEnabled = true;
        this.home_state_play = this.add.sprite(this.world.centerX, 300, "play_game");
        this.home_state_play.anchor.set(0.5, 0.5);
        this.home_state_play.inputEnabled = true;

        this.gameMuteBtn = this.add.button(360, 50, 'mute_sound', this.gameMuteFunction, this);
        this.gameMuteBtn.anchor.set(0.5, 0.5);
        //this.gameMuteBtn.visible = true;
        this.gameUnMuteBtn = this.add.button(360, 50, 'unmute_sound', this.gameMuteFunction, this);
        this.gameUnMuteBtn.anchor.set(0.5, 0.5);
        this.gameUnMuteBtn.visible = false;

        this.twisty_icon = this.add.sprite(this.world.centerX, 170, "twisty_name");
        this.twisty_icon.anchor.set(0.5, 0.5);

        this.home_state_play.events.onInputDown.add(() => {
            this.state.start("levelsstate");
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
        this.text_play.setTextBounds(this.world.centerX, this.world.centerY + 100);
        this.text_play.inputEnabled = true;

        this.text_play.events.onInputDown.add(() => {
            this.state.start("levelsstate");
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