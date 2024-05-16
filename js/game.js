let canvas;
let ctx; //abkürzung context
let world;
let keyboard = new Keyboard();
let sounds = [];
let allIntervalls = [];
background_sound = new Audio('audio/background.mp3');
background_sound.loop = true;
background_sound.volume = 0.1;

// function init() {
//     //document.getElementById('startScreen').classList.remove('d-none');
//     //clearInterval(world.allIntervalls);
// }

function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('loseScreen').classList.add('d-none');
    document.getElementById('iconBar').classList.remove('d-none');
    initLevel();
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
    ctx = canvas.getContext('2d'); //bewirkt das hinzufügen im canvas (in 2D style)

    console.log('my character is', world['character']); //oder world.character

    this.background_sound.play();
    sounds.push(background_sound);
}

function loseGame() {
    canvas.classList.add('d-none');
    document.getElementById('loseScreen').classList.remove('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    //world.clearAllIntervals();
    this.background_sound.pause();
}

function winGame() {
    canvas.classList.add('d-none');
    document.getElementById('winScreen').classList.remove('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    //world.clearAllIntervals();
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

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 68) {
        keyboard.D = false;
    }
});

