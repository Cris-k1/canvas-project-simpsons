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
    imgHomer.addEventListener("load", () => {
      this.imgHomer = imgHomer;
    });
    // Source Image
    imgHomer.src = "../images/Homer.png";
    this.ctx.drawImage(imgHomer, this.x, this.y - 150, 160, 160);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  jump() {
    if (this.jumping === true) {
      if (this.jumpTop === true) {
        this.speedY = 3;
        
      } else {
        this.speedY = -2;
      }

      if (this.y <= 280 && this.jumpTop === false) {
        this.jumpTop = true;
        this.speedY = 2;
      }

      if (this.y >= 420 && this.jumpTop === true) {
        this.jumpTop = false;
        this.speedY = 0;
        this.jumping = false;
      }
    }
  }
}
