class Keyboard {
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    D = false;

    constructor() {
        this.bindKeyEvents();
        this.bindTouchEvents();
    }
    /**
     * handle the keyinput
     */
    bindKeyEvents() {
        this.bindKeyStart();
        this.bindKeyEnd();
    }

    /**
     * handle the touchinput for mobile version
     */
    bindTouchEvents() {
        this.bindTouchStart();
        this.bindTouchEnd();
    }

    /**
     * eventListener to handle touchstart input for mobile version
     */
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
    }
    /**
     * eventListener to handle touchend input for mobile version
     */
    bindTouchEnd() {
        window.addEventListener("touchend", (e) => {
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
    }

    /**
     * eventListener to handle keyup input
    */
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

    /**
     * eventListener to handle keydown input
     */
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

}