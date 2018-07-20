import LoadState from '../states/loadstate.js';
import CreateState from '../states/createstate.js';
import Home_state from '../states/Homestate.js';


export default class Game extends Phaser.Game {
    constructor() {
        super(500, 800, Phaser.AUTO);

        this.state.add('loadstate', LoadState, false);
        this.state.add('createstate', CreateState, false);
        this.state.add('Home_state', Home_state, false);
        this.state.start('loadstate');
    }
}
new Game();