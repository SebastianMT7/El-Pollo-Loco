class DrawableObj {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image(); //this.img = document.getElemtByID('image') <img id="image">
        this.img.src = path;
    }

    draw(ctx) {
        try{
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch(e){
        console.warn('error laoding img', e);
        console.log('not image', this.img.src);
    }
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall
            || this instanceof ThrowableObj || this instanceof Bottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}