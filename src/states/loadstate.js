class LoadState extends Phaser.State {

    init() {
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;        
    }

    preload() {
        //loading assets
        this.load.image('target', 'assets/images/target.png');
        // this.load.image('circle', 'assets/images/Black_Circle1.png');
        this.load.image('circle', 'assets/images/circle_levels.png');
        this.load.image('arrow', 'assets/images/arrow_bow.png');
        this.load.image('bow', 'assets/images/bow.png');
        this.load.image('home_screen', 'assets/images/Screens1/twisty_home_screen.png');
        this.load.image('play_game', 'assets/images/Screens1/play_test.png');
        this.load.image('mute_sound', 'assets/images/Screens1/mute_test.png');
        this.load.image('unmute_sound', 'assets/images/Screens1/unmute_test.png');
        this.load.image('twisty_name', 'assets/images/Screens1/twisty_name.png');

        //loading sounds

        this.load.audio('game_bg_music', 'assets/audio/Twisty_Arrow.mp3');

    }

    create() {

        this.state.start('Home_state');

    }
}
export default LoadState;