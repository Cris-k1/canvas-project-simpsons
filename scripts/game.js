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

    createBackground() {
        const backgroundImg = new Image();
        backgroundImg.addEventListener("load", () =>{
            this.backgroundImg = backgroundImg;
        });

        backgroundImg.src = "../images/background.png";
        this.ctx.drawImage(backgroundImg, 0, 0, this.width, this.height);

        this.ctx.fillStyle = "white";
        this.ctx.font = "30px Helvetica";
        this.ctx.fillText(`Score ${this.score}`, 80, 30);
    }



    clear(){
        this.ctx.clearRect(0,0,700,500)
    }
/*
    updateEnemies(){
        let originalX = 0;
        for (let i = 0; i<this.enemies.length; i++){
            // enemies's y ++
            this.enemies[i].x +=1; 
            // enemies' draw function
            this.enemies[i].draw();
        }
        // each 2 seconds, a enemy is updated
        if(this.frames % 200 === 0){
            let minHeight = 25; // at least of 50px of width
            let maxHeight = 75; // max width of 400px

            let height = Math.floor(Math.random()*(maxHeight - minHeight + 1) + minHeight);

            let randomX = Math.floor(Math.random() * height);

            this.enemies.push(new Enemies(randomX, originalX, height, 40, false, 'brown', this.ctx))
        }
    }
    */
}