class MovableObj extends DrawableObj {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    accleration = 2.5;
    health = 100;
    coins = 0;
    bottles = 0;
    lastHit = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accleration;
            }
            if (this.y > 72 && this instanceof Character) {
                this.y = 72;
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

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left && // R -> L
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && // B -> T
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right && // L -> R
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom; // T -> B
    }

    hit() {
        if (this instanceof Endboss) {
            this.health -= 20;
        }
        this.health -= 5;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    recoverHealth() {
        let healthRegen = 20;
        let newHealth = this.health + healthRegen;
        if (newHealth >= 100) {
            this.health = 100
        } else this.health += 20;
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
        // zB walk animation
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