class Bottle extends MovableObj {

    IMAGES_GROUND = [
        '../img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    IMAGES_SPLASH = [
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];
    
    y = 380;
    height = 50;
    width = 50;

    constructor() {
        super().loadImage('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_GROUND);
        //this.loadImages(this.IMAGES_THROW);
        //this.loadImages(this.IMAGES_SPLASH);

        this.x = 500 + Math.random() * 1100;
        this.animate();
        //this.playAnimation(this.IMAGES_GROUND);
    }

    animate() {
        setInterval(() => { 
            this.playAnimation(this.IMAGES_GROUND);
        }, 500);
    }

}