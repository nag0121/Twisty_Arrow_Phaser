import LoadState from '../states/loadstate.js';
import CreateState from '../states/createstate.js';
import Home_state from '../states/Homestate.js';
import Levels_State from '../states/levelsState.js';

Phaser.Device.onInitialized.add(function (device) {

    device.canvasBitBltShift = true;
    device.mspointer = false;

});
export default class Game extends Phaser.Game {
    constructor() {
        super(window.innerWidth, window.innerHeight, Phaser.AUTO);

        this.state.add('loadstate', LoadState, false);
        this.state.add('createstate', CreateState, false);
        this.state.add('Home_state', Home_state, false);
        this.state.add('levelsstate', Levels_State, false);

        this.state.start('loadstate');
    }
}
new Game();