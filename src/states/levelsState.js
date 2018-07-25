export default class LevelsState extends Phaser.State {
    create () {
        this.stage.backgroundColor = '#ffffff'; //game background color
        var directions = {
            x: [50,120,190,260,330],
            y: 50
        }

        for (let i = 0; i<5; i++) {
            if (directions.x[i] > window.innerWidth){
                directions.y = 120;
                directions.x[i] = 50;
            }
            this.level = this.add.sprite(directions.x[i], directions.y,'circle');
            this.level.scale.set(0.15);
            this.level.anchor.set(0.5);

            this.levelText = this.add.text(directions.x[i], directions.y, i+1, {
                fill: '#ffffff',
                align: 'center'
            });

            this.levelText.anchor.set(0.5);

            this.level.inputEnabled = true;
            this.level.events.onInputDown.add(() => {
                this.state.start('CreateState');
            });

        }

        // this.state.start('createstate');
    }
}