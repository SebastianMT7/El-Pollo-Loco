class ThrowableObj extends MovableObj {

    IMAGES_THROW = [
        '../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_SPLASH = [
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y) {
        super().loadImage('../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }


    throw() {
        this.speedY = 25;
        this.applyGravity();
        this.throwBottle = setInterval(() => {
            this.x += 10;
            this.animateThrow();
        }, 25);

    }

    animateThrow() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_THROW);
        }, 25);
    }

    animateSplash() {
        clearInterval(this.throwBottle);        
        this.playAnimation(this.IMAGES_SPLASH); 
        
    }
}