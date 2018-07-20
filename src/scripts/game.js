import LoadState from '../states/loadstate.js';
import CreateState from '../states/createstate.js';
import Home_state from '../states/Homestate.js';
import Levels_State from '../states/levelsState.js';


export default class Game extends Phaser.Game {
    constructor() {
<<<<<<< HEAD
        super(window.innerWidth, window.innerHeight, Phaser.AUTO);
=======
        super(400, 580, Phaser.AUTO);
>>>>>>> 295b7b903c4955226d11eb28923fe6aedd46ed0a

        this.state.add('loadstate', LoadState, false);
        this.state.add('createstate', CreateState, false);
        this.state.add('Home_state', Home_state, false);
        this.state.add('levelsstate', Levels_State, false);

        this.state.start('loadstate');
    }
}
new Game();