import LoadState from '../states/LoadState.js';
import CreateState from '../states/CreateState.js';
import HomeState from '../states/HomeState.js';
import LevelsState from '../states/LevelsState.js';


export default class Game extends Phaser.Game {
    constructor() {
        super(window.innerWidth, window.innerHeight, Phaser.AUTO);

        this.state.add('LoadState', LoadState, false);
        this.state.add('CreateState', CreateState, false);
        this.state.add('HomeState', HomeState, false);
        this.state.add('LevelsState', LevelsState, false);

        this.state.start('LoadState');
    }
}
new Game();