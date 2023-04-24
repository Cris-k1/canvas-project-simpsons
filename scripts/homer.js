class Homer{
    constructor(x, y, w, h, color, ctx){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0;
        this.jumping = false
        this.jumpTop = false
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    newPos(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

jump(){

if (this.jumping === true){

    if(this.jumpTop === true){
        // down
        this.speedY = 2
    }else{
        // up
        this.speedY = -2
    }

    // maximo que o homer pode saltar (250)
    if (this.y === 250){
     this.jumpTop = true
    }

    // verificar se o homer esta no chao
    if (this.y >= 420 && this.jumpTop === true){
        this.jumpTop = false
        this.speedY = 0
        this.jumping = false
    }

}

}

}