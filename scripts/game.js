class Game{
    constructor(ctx, width, height, homer){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.homer = homer;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
    }

    start(){
        this.intervalId = setInterval(this.update, 10)
    }

    update = () =>{
        this.frames++;
        this.clear();
        this.homer.jump()
        this.homer.newPos();
        this.homer.draw();
        //this.updateEnemies();
        //this.checkGameOver();
    }

    stop(){
        clearInterval(this.intervalId);

    }

    clear(){
        this.ctx.clearRect(0,0,700,500)
    }
}