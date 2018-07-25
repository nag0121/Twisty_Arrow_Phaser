import LoadState from '../states/LoadState.js';
import CreateState from '../states/CreateState.js';
import HomeState from '../states/HomeState.js';
import LevelsState from '../states/LevelsState.js';

Phaser.Device.onInitialized.add(function (device) {

    device.canvasBitBltShift = true;
    device.mspointer = false;

});
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