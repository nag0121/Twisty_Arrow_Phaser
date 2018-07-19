class LoadState extends Phaser.State {
     
    init () {
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;        
    }

    preload () {
         //loading assets
        this.load.image('target', 'assets/images/target.png');
        this.load.image('arrow', 'assets/images/arrow_bow.png');
        this.load.image('bow', 'assets/images/bow.png');
    }

    create () {
        this.state.start('createstate');
    }
}
export default LoadState;