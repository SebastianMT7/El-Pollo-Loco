class DrawableObj {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     * load an image from the given path.
     * @param {string} path - The path of the image
     */
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElemtByID('image') <img id="image">
        this.img.src = path;
    }

    /**
     * draws the images on the cnavas
     * @param {object} ctx - the 2D rendering context of the canvas
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('error laoding img', e);
            console.log('not image', this.img.src);
        }
    }

    /**
     *  draw rectangles on the canvas for specific instances
     * @param {object} ctx - the 2D rendering context of the canvas
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall
            || this instanceof Endboss || this instanceof ThrowableObj || this instanceof Bottle
            || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.right - this.offset.left,
                this.height - this.offset.bottom - this.offset.top
            );
            ctx.stroke();
        }
    }

    /**
     * loads images from the array of paths and stores them in the image cache
     * @param {array} array - the array of image paths to load  
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}