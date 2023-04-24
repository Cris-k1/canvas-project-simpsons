class Game {
  constructor(ctx, width, height, homer) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.homer = homer;
    this.intervalId = null;
    this.frames = 0;
    this.enemies = [];
  }

  start() {
    this.intervalId = setInterval(this.update, 10);
  }

  update = () => {
    this.frames++;
    this.clear();
    this.createBackground();
    this.homer.newPos();
    this.homer.draw();
    //this.updateEnemies();
    //this.checkGameOver();
  };

  stop() {
    clearInterval(this.intervalId);
  }

  createBackground() {
    const backgroundImg = new Image();
    backgroundImg.addEventListener("load", () => {
      this.backgroundImg = backgroundImg;
    });

    backgroundImg.src = "../images/background.png";
    this.ctx.drawImage(backgroundImg, 0, 0, this.width, this.height);

    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Helvetica";
    this.ctx.fillText(`Score ${this.score}`, 80, 30);
  }

  clear() {
    this.ctx.clearRect(0, 0, 700, 500);
  }
}
