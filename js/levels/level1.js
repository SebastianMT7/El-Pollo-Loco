const level1 = new Level(
    [
        new Bottle(320),
        new Bottle(570),
        new Bottle(800),
        new Bottle(1000),
        new Bottle(1300),
        new Bottle(1600),
        new Bottle(2000)

    ],

    [   new Coin(300),
        new Coin(500),
        new Coin(700),
        new Coin(1000),
        new Coin(1500),
        new Coin(1700)
    ],
    
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new Endboss()
    ],

    [
        new Cloud()
    ],

    [
        new BackgroundObject('../img/5_background/layers/air.png', 0),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/air.png', 719),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('../img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 719 * 2),
        new BackgroundObject('../img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719 * 3)
    ]


);