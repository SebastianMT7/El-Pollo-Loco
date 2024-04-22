class Coin extends MovableObj {

    IMAGES_GROUND = [
        '../img/8_coin/coin_1.png',
        '../img/8_coin/coin_2.png'
    ];

    height = 50;
    width = 50;

    constructor() {
        super().loadImage('../img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_GROUND);

        this.x = 500 + Math.random() * 1400;
        this.y = 30 + Math.random() * 200;
        console.log('x',this.x);
        this.animate();
    }

    animate() {
        setInterval(() => { //%(modulul) ist die bezeichnunge für den mathematischen Rest
            this.playAnimation(this.IMAGES_GROUND);
        }, 500);
    }

}