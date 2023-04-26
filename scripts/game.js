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
    this.bonus = [];
    this.bonus2 = [];
    this.score = 0;
    this.lifes = 5;
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
    this.updateBonus();
    this.drawScore();
    this.checkGameBonus();
    this.checkGameOver();
    this.showLifes();
    this.winOrLose();
    if (this.lifes <= 0) {
      this.stop();
    }
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
  }

  clear() {
    this.ctx.clearRect(0, 0, 700, 500);
  }

  showLifes() {
    this.ctx.font = "22px Jazz LET, fantasy";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Lifes: ${this.lifes}`, 580, 450);
  }

  updateEnemies() {
    //enemy mr.burns
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.frames < 1500) {
        this.enemies[i].x -= 4;
        this.enemies[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.enemies[i].x -= 5;
        this.enemies[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.enemies[i].x -= 7;
        this.enemies[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.enemies[i].x -= 9;
        this.enemies[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.enemies[i].x -= 13;
        this.enemies[i].draw();
      } else if (this.frames >= 6) {
        this.enemies[i].x -= 16;
        this.enemies[i].draw();
      }
    }
    if (this.frames % 180 === 0) {
      console.log("here");
      this.enemies.push(new Enemies(this.ctx));
    }
    /*
    // enemy 2 toxic
    for (let i = 0; i < this.enemies2.length; i++) {
      if (this.frames < 1500) {
        this.enemies2[i].x -= 1;
        this.enemies2[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.enemies2[i].x -= 1.1;
        this.enemies2[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.enemies2[i].x -= 1.2;
        this.enemies2[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.enemies2[i].x -= 1.3;
        this.enemies2[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.enemies2[i].x -= 1.4;
        this.enemies2[i].draw();
      } else if (this.frames >= 6500) {
        this.enemies2[i].x -= 1.5;
        this.enemies2[i].draw();
      }
    }
    if (this.frames % 130 === 0) {
      this.enemies2.push(new Enemies2(this.ctx));
    }

    // enemy 3 bart
    for (let i = 0; i < this.enemies3.length; i++) {
      if (this.frames < 1500) {
        this.enemies3[i].x -= 2;
        this.enemies3[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.enemies3[i].x -= 2.1;
        this.enemies3[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.enemies3[i].x -= 2.2;
        this.enemies3[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.enemies3[i].x -= 2.3;
        this.enemies3[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.enemies3[i].x -= 2.4;
        this.enemies3[i].draw();
      } else if (this.frames >= 6500) {
        this.enemies3[i].x -= 2.5;
        this.enemies3[i].draw();
      }
    }
    if (this.frames % 160 === 0) {
      this.enemies3.push(new Enemies3(this.ctx));
    }*/
  }

  updateBonus() {
    // bonus donuts
    for (let i = 0; i < this.bonus.length; i++) {
      if (this.frames < 1500) {
        this.bonus[i].y += 0.1;
        this.bonus[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.bonus[i].y += 0.2;
        this.bonus[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.bonus[i].y += 0.3;
        this.bonus[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.bonus[i].y += 0.4;
        this.bonus[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.bonus[i].y += 0.5;
        this.bonus[i].draw();
      } else if (this.frames >= 6) {
        this.bonus[i].y += 0.6;
        this.bonus[i].draw();
      }
    }
    if (this.frames % 300 === 0) {
      console.log("donuts");
      this.bonus.push(new Bonus(this.ctx));
    }

    // bonus 2 donuts
    for (let i = 0; i < this.bonus2.length; i++) {
      if (this.frames < 1500) {
        this.bonus2[i].y += 1;
        this.bonus2[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.bonus2[i].y += 2;
        this.bonus2[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.bonus2[i].y += 3;
        this.bonus2[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.bonus2[i].y += 4;
        this.bonus2[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.bonus2[i].y += 5;
        this.bonus2[i].draw();
      } else if (this.frames >= 6500) {
        this.bonus2[i].y += 6;
        this.bonus2[i].draw();
      }
    }
    if (this.frames % 250 === 0) {
      const donut = new BonusTwo(this.ctx);
      this.bonus2.push(donut);
    }
  }

  checkGameOver() {
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.homer.crashWith(this.enemies[i])) {
        this.enemies.splice(i, 1);
        crash2.play()
        this.lifes -= 1;
        console.log("burns");
      }
    }
    for (let i = 0; i < this.enemies2.length; i++) {
      if (this.homer.crashWith(this.enemies2[i])) {
        this.enemies2.splice(i, 1);
        this.lifes -= 1;
        console.log("toxic");
      }
    }
    for (let i = 0; i < this.enemies3.length; i++) {
      if (this.homer.crashWith(this.enemies3[i])) {
        this.enemies3.splice(i, 1);
        this.lifes -= 1;
        console.log("bart");
      }
    }
  }

  checkGameBonus() {
    for (let i = 0; i < this.bonus.length; i++) {
      if (this.homer.crashWith(this.bonus[i])) {
        this.bonus.splice(i, 1);
        happyHomer.play();
        this.score += 5;
        console.log("duff");
      }
    }
    for (let i = 0; i < this.bonus2.length; i++) {
      if (this.homer.crashWith(this.bonus2[i])) {
        this.bonus2.splice(i, 1);
        donutsIsGood.play();
        this.score += 10;
        console.log("donut");
      }
    }
    if (this.frames % 100 === 0) {
      this.score += 1;
    }
  }

  drawScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Helvetica";
    this.ctx.fillText(`Score ${this.score}`, 80, 30);
  }

  winOrLose() {
    if (this.score === 1000 && this.lifes > 0) {
      this.ctx.fillStyle = "green";
      this.ctx.font = "bold 30px Helvetica";
      this.ctx.fillText(`YOU WIN! Score ${this.score}`, 200, 250);
    } else if (this.score < 1000 && this.lifes === 0) {
      this.ctx.fillStyle = "red";
      this.ctx.font = "bold 30px Helvetica";
      this.ctx.fillText(`YOU LOSE! Score ${this.score}`, 200, 250);
    }
  }
}
