class Endboss extends MovableObj {
    y = 5;
    height = 450;
    width = 350;
    health = 100;
    firstContact = false;
    offset = {
        top: 75,
        bottom: 15,
        left: 10,
        right: 10,
    };
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    bossAppear_sound = new Audio('audio/boss_appears.mp3');

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);

        sounds.push(this.bossAppear_sound);
        this.x = 3000;
        this.animate();
    }

    animate() {
        this.spawnBoss();
        this.hurtBoss();
        this.deadBoss();
    }

    hurtBoss() {
        this.hurtBossIntervall = setInterval(() => {
            if (this.isHurt()) {
                console.log('bosshealt',this.health)
                this.playAnimation(this.IMAGES_HURT);
                //this.hurt_sound.play();
            }
        }, 500);
    }

    deadBoss(){
        this.deadBossIntervall = setInterval(() => {
            if (this.isDead()) {
                clearInterval(this.moveEndboss);
                this.playAnimation(this.IMAGES_DEAD);
                //this.dead_sound.play();                
            }
        }, 100 / 10);
    }

    spawnBoss() {
        this.alertBoss = setInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
        }, 150)

        this.checkfirstContact = setInterval(() => {
            if (this.firstContact == true) {
                //this.bossAppear_sound.play();
                console.log('contact', 'true')
                setTimeout(() => {
                    clearInterval(this.alertBoss);
                    this.moveEndboss();
                }, 1000);
            }
        }, 150);
    }

    moveEndboss() {
        clearInterval(this.checkfirstContact);
        world.bossAppear_sound.pause();
        this.walkBossAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 1000);

        this.walkBoss = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

}