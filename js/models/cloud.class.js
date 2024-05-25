class Cloud extends MovableObj {
    y = 50;
    width = 500;
    height = 250;

    constructor(x) {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = x;
        this.animate();
    }

    /**
     * move the clouds
     */
    animate() {
        this.moveClouds = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}