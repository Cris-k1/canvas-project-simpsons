class Game {
  constructor(ctx, width, height, homer) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.homer = homer;
    this.intervalId = null;
    this.frames = 0;
    this.enemies = [];
    this.enemies2 = [];
    this.enemies3 = [];
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
    this.homer.jump();
    this.updateEnemies();

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

  updateEnemies() {
    //enemy mr.burns
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.frames < 1500) {
        this.enemies[i].x -= 1;
        this.enemies[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.enemies[i].x -= 2;
        this.enemies[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.enemies[i].x -= 3;
        this.enemies[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.enemies[i].x -= 4;
        this.enemies[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.enemies[i].x -= 5;
        this.enemies[i].draw();
      } else if (this.frames >= 6) {
        this.enemies[i].x -= 6;
        this.enemies[i].draw();
      }
    }
    if (this.frames % 180 === 0) {
      console.log("here");
      this.enemies.push(new Enemies(this.ctx));
    }

    // enemy 2 toxic
    for (let i = 0; i < this.enemies2.length; i++) {
      if (this.frames < 1500) {
        this.enemies2[i].x -= 2;
        this.enemies2[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.enemies2[i].x -= 3;
        this.enemies2[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.enemies2[i].x -= 4;
        this.enemies2[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.enemies2[i].x -= 5;
        this.enemies2[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.enemies2[i].x -= 6;
        this.enemies2[i].draw();
      } else if (this.frames >= 6500) {
        this.enemies2[i].x -= 7;
        this.enemies2[i].draw();
      }
    }
    if (this.frames % 130 === 0) {
      this.enemies2.push(new Enemies2(this.ctx));
    }

    // enemy 3 bart
    for (let i = 0; i < this.enemies3.length; i++) {
      if (this.frames < 1500) {
        this.enemies3[i].x -= 3;
        this.enemies3[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.enemies3[i].x -= 4;
        this.enemies3[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.enemies3[i].x -= 5;
        this.enemies3[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.enemies3[i].x -= 6;
        this.enemies3[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.enemies3[i].x -= 7;
        this.enemies3[i].draw();
      } else if (this.frames >= 6500) {
        this.enemies3[i].x -= 8;
        this.enemies3[i].draw();
      }
    }
    if (this.frames % 160 === 0) {
      this.enemies3.push(new Enemies3(this.ctx));
    }
  }
}
