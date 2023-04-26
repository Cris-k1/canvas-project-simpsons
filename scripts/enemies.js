class Enemies {
  constructor(ctx) {
    this.x = 700;
    this.y = 430;
    this.w = 30;
    this.h = 60;
    this.img = new Image();
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    this.img.src = "../images/removed/mrburns-removebg-preview.png";
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
}
/*
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
    this.img.src = "images/removed/toxicwaste-removebg-preview.png";
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
    this.img.src = "images/removed/bart-removebg-preview.png";
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
}
*/
