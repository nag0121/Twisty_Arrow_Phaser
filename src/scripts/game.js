import LoadState from '../states/loadstate.js';
import CreateState from '../states/createstate.js';

export default class Game extends Phaser.Game {
    constructor() {
        super(850, 1535, Phaser.CANVAS);

        this.state.add('loadstate', LoadState, false);
        this.state.add('createstate', CreateState, false);

        this.state.start('loadstate');
    }
}
new Game();