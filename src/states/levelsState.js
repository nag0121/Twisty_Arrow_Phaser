export default class Levels_State extends Phaser.State {
    create() {
        this.stage.backgroundColor = '#070707'; //game background color
        var directions = {
            x: [40, 110, 180, 250],
            y: [100, 100, 100, 100]
        }

        let l_style = {
            font: "29px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        this.level_stage = this.add.text(0, 0, "LEVELS", l_style);
        this.level_stage.setTextBounds(this.world.centerX - 30, 20);
        // this.level_stage.inputEnabled = true;

        // this.level_stage.events.onInputDown.add(() => {
        //     this.state.start("Home_state");
        // });

        for (let i = 0; i < 4; i++) {
            this.level = this.add.sprite(directions.x[i], directions.y[i], 'circle');
            this.level.scale.set(0.20);
            this.level.anchor.set(0.5);

            this.levelText = this.add.text(directions.x[i], directions.y[i], i + 1, {
                font: "30px Arial",
                fill: "#fff",
                boundsAlignH: "center"
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