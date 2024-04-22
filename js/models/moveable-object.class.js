class MovableObj extends DrawableObj {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    accleration = 2.5;
    health = 100;
    coins = 0; 
    bottles = 0;
    lastHit = 0;

    applyGravity(img) {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                if ((this instanceof ThrowableObj)) {
                    this.playAnimation(img); //nur beim werfen nicht beim springen
                }
                this.y -= this.speedY;
                this.speedY -= this.accleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if ((this instanceof ThrowableObj)) { //throwable Objects should always fall
            return true;
        } else {
            return this.y < 72;
        }
    }

    //character isColliding (Chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    collectingCoins() {
        this.coins += 20;
        if (this.coins >= 100) {
            this.coins = 100;
        } 
    }

    collectingBottles() {
        this.bottles += 20;
        if (this.bottles >= 100) {
            this.bottles = 100;
        } 
    }

    hit() {
        this.health -= 5;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; //Differenz in millisekunden
        timePassed = timePassed / 1000; //Differenz in sekunden
        return timePassed < 1;
    }

    isDead() {
        return this.health == 0;
    }

    playAnimation(images) {
        //walk animation
        let i = this.currentImage % images.length; //zB i= 5 % 6; => 0,Rest 5 (% ist geteilt durch)
        // i= 7 % 6; => 1,Rest 1 
        // i = 0,1,2,3,4,5,0,1,2,3,4,5,0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}