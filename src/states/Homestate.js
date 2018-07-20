export default class Home_state extends Phaser.State {

    create() {

        this.home_state = this.add.sprite(0, 0, "home_screen");
        //this.home_state.inputEnabled = true;
        this.home_state_play = this.add.sprite(this.world.centerX + 10, this.world.centerY - 40, "play_game");
        this.home_state_play.anchor.set(0.5, 0.5);
        this.home_state_play.inputEnabled = true;

        this.gameMuteBtn = this.add.button(450, 50, 'mute_sound', this.gameMuteFunction, this);
        this.gameMuteBtn.anchor.set(0.5, 0.5);
        //this.gameMuteBtn.visible = true;
        this.gameUnMuteBtn = this.add.button(450, 50, 'unmute_sound', this.gameMuteFunction, this);
        this.gameUnMuteBtn.anchor.set(0.5, 0.5);
        this.gameUnMuteBtn.visible = false;

        this.home_state_play.events.onInputDown.add(() => {
            this.state.start("createstate");
        });

        // Playing Background Music

        this.game_music = this.add.audio('game_bg_music');
        this.game_music.play();



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