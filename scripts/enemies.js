class Enemies {
  constructor(ctx) {
    this.x = 700;
    this.y = 300;
    this.w = 60;
    this.h = 120;
    this.img = new Image();
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    this.img.src = "../images/mrburns.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  crashWith(enemies) {
    return (
      this.bottom() > enemies.top() &&
      this.top() < enemies.bottom() &&
      this.right() > enemies.left() &&
      this.left() < enemies.right()
    );
  }
}

class Enemies2 {
  constructor(ctx) {
    this.x = 700;
    this.y = 300;
    this.w = 75;
    this.h = 100;
    this.img = new Image();
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    this.img.src = "../images/toxicwaste.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  crashWith(enemies2) {
    return (
      this.bottom() > enemies2.top() &&
      this.top() < enemies2.bottom() &&
      this.right() > enemies2.left() &&
      this.left() < enemies2.right()
    );
  }
}

class Enemies3 {
  constructor(ctx) {
    this.x = 700;
    this.y = 300;
    this.w = 50;
    this.h = 100;
    this.img = new Image();
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    this.img.src = "../images/bart.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  crashWith(enemies3) {
    return (
      this.bottom() > enemies3.top() &&
      this.top() < enemies3.bottom() &&
      this.right() > enemies3.left() &&
      this.left() < enemies3.right()
    );
  }
}
