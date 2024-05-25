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

    /**
     * apply the gravity to character and objects
     */
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

    /**
     * check if the character or the objects are above the ground
     * @returns true if is above the ground
     */
    isAboveGround() {
        if ((this instanceof ThrowableObj)) { 
            return true;
        } else {
            return this.y < 72;
        }
    }

    /**
     * check if objects and enemys colliding with the character
     * @param {object} mo - the other object to check for collision with
     * @returns true if objects and enemys are colliding
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&  
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && 
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right && 
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * reduced health by a hit
     */
    hit() {
        this.health -= 5;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        if (this instanceof Endboss) {
            this.health -= 20;
        }
    }

    /**
     * fills the health of the character
     */
    recoverHealth() {
        let healthRegen = 20;
        let newHealth = this.health + healthRegen;
        if (newHealth >= 100) {
            this.health = 100
        } else this.health += 20;
    }

    /**
     * check if the object is hurt based on the time passed since the last hit.
     * @returns true if time is passed 
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; 
        timePassed = timePassed / 1000; 
        return timePassed < 1;
    }

    /**
     * check if the object has zero health
     * @returns true if health is zero
     */
    isDead() {
        return this.health == 0;
    }

    /**
     * loads the images from the array to create a animation
     * @param {array} images - imagearray from the object
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * let the object moves right
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * let the object moves left
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * let the object jump
     */
    jump() {
        this.speedY = 30;
    }

}