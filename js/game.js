let canvas;
let ctx; //abkürzung context
let world;
let keyboard = new Keyboard();
let sounds = [];
let allIntervalls = [];
background_sound = new Audio('audio/background.mp3');
background_sound.loop = true;
background_sound.volume = 0.1;


function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('loseScreen').classList.add('d-none');
    document.getElementById('iconBar').classList.remove('d-none');
    document.getElementById('mobileHud').classList.remove('d-none');
    console.log('Game:', 'start')
    initLevel();
    initGame();
    //console.log('my character is', world['character']); //oder world.character
    //resetGameWorldContent(); -> benötigt?
    this.background_sound.play();
    sounds.push(background_sound);
}

function initGame() {
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
}

// function resetGameWorldContent() {
//     world.throwableObjects = []; //benötigt??
// }

function loseGame() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    document.getElementById('mobileHud').classList.add('d-none');
    document.getElementById('loseScreen').classList.remove('d-none');
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    //clearInterval(this.allIntervalls);
    this.background_sound.pause();
    sounds = [];
}

function winGame() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    document.getElementById('mobileHud').classList.add('d-none');
    document.getElementById('winScreen').classList.remove('d-none');
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    //clearInterval(this.allIntervalls);
    this.background_sound.pause();
}

function fullScreen() {
    canvas.requestFullscreen();
}

function soundOff() {
    document.getElementById('soundOn').classList.add('d-none');
    document.getElementById('soundOff').classList.remove('d-none');
    sounds.forEach(sound => {
        sound.muted = true;
    });
}

function soundOn() {
    document.getElementById('soundOff').classList.add('d-none');
    document.getElementById('soundOn').classList.remove('d-none');
    sounds.forEach(sound => {
        sound.muted = false;
    })
}



