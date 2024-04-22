class Chicken extends MovableObj {
    y = 350;
    height = 80;
    width = 90;
    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];    
    
    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 500 + Math.random() * 1100;        
        this.speed = 0.15 + Math.random() * 0.5; //Math.Random ist immer eine zufälluge Zahl zwischen 0 und 1 deshalb  *0,25
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); //besagt das das Bild 60x pro sek angezeigt wird (60fps)
        
        setInterval(() => { //%(modulul) ist die bezeichnunge für den mathematischen Rest
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);
    }
}