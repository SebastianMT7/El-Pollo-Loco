class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new HealthBar();
    coinsBar = new CoinsBar();
    bottlesBar = new BottlesBar();
    bossHealthBar = new EndbossHealthBar();
    throwableObjects = [];
    coinsInventory = 0;
    bottlesInventory = 0;


    collectBottle_sound = new Audio('audio/collecting_bottle.mp3');
    collectCoin_sound = new Audio('audio/collecting_coin.mp3');
    breakBottle_sound = new Audio('audio/breaking_bottle.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.throwBottle();
        }, 200);
    }

    throwBottle() {
        if (this.keyboard.D && this.bottlesInventory > 0) {
            let bottle = new ThrowableObj(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottlesInventory -= 20;
            this.bottlesBar.setPercentage(this.bottlesInventory);
        }
    }

    checkCollisions() {
        this.collisionEnemie();
        this.collisionEndboss();
        this.collisionCoins();
        this.collisionBottles();
    }

    collisionEnemie() {
        this.level.enemies.forEach(enemy => {            
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    this.deleteEnemy(enemy);
                    this.character.jump();
                }
                else {
                    this.character.hit();
                    this.healthBar.setPercentage(this.character.health);
                }
            }
        });
    }

    deleteEnemy(enemy){
        enemy.health = 0;
        setTimeout(() => {
            let index = this.level.enemies.indexOf(enemy);
            this.level.enemies.splice(index, 1);
        }, 1500);
    }

    collisionEndboss() {
        if (this.character.isColliding(this.endboss)) {
            console.log('collide', 'boss')
            this.character.hit();
            this.healthBar.setPercentage(this.character.health);
        }
    }

    collisionCoins() {
        this.level.coins.forEach(coin => {
            if (this.character.isColliding(coin)) {
                this.coinsInventory += 20;
                if (this.coinsInventory >= 100) {
                    this.coinsInventory = 100;
                }
                this.collectCoin_sound.play();
                this.coinsBar.setPercentage(this.coinsInventory);
                let coinIndex = this.level.coins.indexOf(coin);
                this.level.coins.splice(coinIndex, 1);
            }
        });
    }

    collisionBottles() {
        this.level.bottles.forEach(bottle => {
            if (this.character.isColliding(bottle)) {
                this.bottlesInventory += 20;
                if (this.bottlesInventory >= 100) {
                    this.bottlesInventory = 100;
                }
                this.collectBottle_sound.play();
                this.bottlesBar.setPercentage(this.bottlesInventory);
                let bottleIndex = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(bottleIndex, 1);
                console.log('bottlesInventory', this.bottlesInventory) //wieder löschen!!
            }
        });
    }

    //draw wird immer wieder ausgeführt
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addLevelObjects();
        this.ctx.translate(-this.camera_x, 0);
        //-------Space for fixed object--------
        this.addLevelBars();
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw(); //self wird erstellt, weil er hier (warum auch immer) .this nicht kennt
        });
    }

    addLevelObjects() {
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
    }

    addLevelBars() {
        this.addToMap(this.healthBar);
        this.addToMap(this.coinsBar);
        this.addToMap(this.bottlesBar);
        this.addBossHealthBar();
    }

    addBossHealthBar() {
        if (this.character.x >= 2600) {
            this.endboss.firstContact = true;
        }
        if (this.endboss.firstContact == true) {
            this.addToMap(this.bossHealthBar);
        }
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {//mo -> movableObject
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx)
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}