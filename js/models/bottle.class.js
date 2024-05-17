class Bottle extends MovableObj {
    offset = {
        top: 8,
        left: 25,
        right: 15,
        bottom: 8,
    };
    
    IMAGES_GROUND = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];
   
    y = 378;
    height = 60;
    width = 60;
    offset = {
		top: 10,
		bottom: 10,
		left: 15,
		right: 10,
	};

    isExploded = false;

    constructor(x) {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_GROUND);
        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => { 
            this.playAnimation(this.IMAGES_GROUND);
        }, 500);
    }

}