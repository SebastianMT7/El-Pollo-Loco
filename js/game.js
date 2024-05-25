let canvas;
let ctx; //abkürzung context
let world;
let keyboard = new Keyboard();
let sounds = [];
let allIntervalls = [];
background_sound = new Audio('audio/background.mp3');
win_sound = new Audio('audio/win.mp3');
lose_sound = new Audio('audio/lose.mp3');
background_sound.loop = true;
background_sound.volume = 0.1;

collectBottle_sound = new Audio('audio/collecting_bottle.mp3');

/**
 * starts the game
 * shows and hides nedded screens
 */
function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('loseScreen').classList.add('d-none');
    document.getElementById('iconBar').classList.remove('d-none');
    document.getElementById('mobileHud').classList.remove('d-none');
    //console.log('Game:', 'start')
    initLevel();
    initGame();
    //console.log('my character is', world['character']); //oder world.character
   
    this.background_sound.play();
    sounds.push(background_sound);
    sounds.push(win_sound);
    sounds.push(lose_sound);
}

/**
 * create a new world
 */
function initGame() {
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
}

/**
 * shows lose screen and resets the world
 */
function loseGame() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    document.getElementById('mobileHud').classList.add('d-none');
    document.getElementById('loseScreen').classList.remove('d-none');
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    //clearInterval(this.allIntervalls);
    this.background_sound.pause();
    this.lose_sound.play();
    // sounds = [];
}

/**
 * shows win screen and resets the world
 */
function winGame() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    document.getElementById('mobileHud').classList.add('d-none');
    document.getElementById('winScreen').classList.remove('d-none');
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    //clearInterval(this.allIntervalls);
    this.background_sound.pause();
    this.win_sound.play();
}

/**
 * shows the game on fullscreen of the display
 */
function fullScreen() {
    canvas.requestFullscreen();
}

function showGameInfos(){
    document.getElementById('howToPlay').classList.remove('d-none');
}

function hideGameInfos(){
    document.getElementById('howToPlay').classList.add('d-none');
}

/**
 * turns the game sound off
 */
function soundOff() {
    document.getElementById('soundOn').classList.add('d-none');
    document.getElementById('soundOff').classList.remove('d-none');
    sounds.forEach(sound => {
        sound.muted = true;
    });
}

/**
 * turns the game sound on
 */
function soundOn() {
    document.getElementById('soundOff').classList.add('d-none');
    document.getElementById('soundOn').classList.remove('d-none');
    sounds.forEach(sound => {
        sound.muted = false;
    })
}



