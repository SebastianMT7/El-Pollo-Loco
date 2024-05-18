class Keyboard {
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    D = false;

    constructor() {
        this.bindKeyEvents();
        this.bindTouchEvents();
    }

    bindKeyEvents() {
        this.bindKeyStart();
        this.bindKeyEnd();
    }

    bindTouchEvents() {
        this.bindTouchStart();
        this.bindTouchEnd();
    }

    bindTouchStart() {
        window.addEventListener("touchstart", (e) => {
            if (e.target.id == "btnRight") {
                keyboard.RIGHT = true;
            }
        
            if (e.target.id == "btnLeft") {
                keyboard.LEFT = true;
            }
        
            if (e.target.id == "btnJump") {
                keyboard.SPACE = true;
            }
        
            if (e.target.id == "btnThrow") {
                keyboard.D = true;
            }
        });
        // document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        //     e.preventDefault();
        //     this.LEFT = true;
        // });
        // document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        //     e.preventDefault();
        //     this.RIGHT = true;
        // });
        // document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        //     e.preventDefault();
        //     this.SPACE = true;
        // });
        // document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        //     e.preventDefault();
        //     this.D = true;
        // });
    }

    bindTouchEnd() {
        window.addEventListener("touchstart", (e) => {
            if (e.target.id == "btnRight") {
                keyboard.RIGHT = false;
            }
        
            if (e.target.id == "btnLeft") {
                keyboard.LEFT = false;
            }
        
            if (e.target.id == "btnJump") {
                keyboard.SPACE = false;
            }
        
            if (e.target.id == "btnThrow") {
                keyboard.D = false;
            }
        });
        // document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        //     e.preventDefault();
        //     this.LEFT = false;
        // });
        // document.getElementById('btnRight').addEventListener('touchend', (e) => {
        //     e.preventDefault();
        //     this.RIGHT = false;
        // });
        // document.getElementById('btnJump').addEventListener('touchend', (e) => {
        //     e.preventDefault();
        //     this.SPACE = false;
        // });
        // document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        //     e.preventDefault();
        //     this.D = false;
        // });
    }

    bindKeyStart() {
        window.addEventListener('keydown', (event) => {
            if (event.keyCode == 39) {
                keyboard.RIGHT = true;
            }
            if (event.keyCode == 37) {
                keyboard.LEFT = true;
            }
            if (event.keyCode == 32) {
                keyboard.SPACE = true;
            }
            if (event.keyCode == 68) {
                keyboard.D = true;
            }
        });
    }

    bindKeyEnd() {
        window.addEventListener('keyup', (event) => {
            if (event.keyCode == 39) {
                keyboard.RIGHT = false;
            }
            if (event.keyCode == 37) {
                keyboard.LEFT = false;
            }
            if (event.keyCode == 32) {
                keyboard.SPACE = false;
            }
            if (event.keyCode == 68) {
                keyboard.D = false;
            }
        });
    }
}