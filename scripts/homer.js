class Homer {
  constructor(x, y, w, h, imgHomer, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.imgHomer = imgHomer;
    this.color = color;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
    this.jumping = false;
    this.jumpTop = false;
  }

  draw() {
    const imgHomer = new Image();
    this.imgHomer = imgHomer;

    // Source Image
    imgHomer.src = "../images/Homer.png";
    this.ctx.drawImage(imgHomer, this.x, this.y, this.w, this.h);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  jump() {
    if (this.jumping === true) {
      if (this.jumpTop === true) {
        this.speedY = 10;
      } else {
        this.speedY = -10;
      }

      if (this.y === 120) {
        this.jumpTop = true;
      }

      if (this.y >= 320 && this.jumpTop === true) {
        this.jumpTop = false;
        this.speedY = 0;
        this.jumping = false;
      }
    }
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

  crashWith(enemy) {
    return (
      this.top() < enemy.bottom() &&
      this.right() > enemy.left() &&
      this.left() < enemy.right() &&
      this.bottom() > enemy.top()
    );
  }

  crashWith(bonus) {
    return (
      this.top() < bonus.bottom() &&
      this.right() > bonus.left() &&
      this.left() < bonus.right() &&
      this.bottom() > bonus.top()
    );
  }
}
