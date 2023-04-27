console.log("JS is on!");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Homer(
  canvas.width / 2 - 35,
  canvas.height - 180,
  90,
  170,
  true,
  null,
  ctx
);

window.onload = () => {
  const startButton = document.getElementById("start-button");
    const startImage = document.getElementById("start-image");
    startButton.onclick = () => {
    startGame();
    startImage.remove();
  }
  };

  function startGame() {
    const game = new Game(ctx, canvas.width, canvas.height, player);
    game.createBackground();
    game.start();
  }
;

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      if (player.x > 0) {
        player.speedX -= 1;
      } else {
        player.x = 0;
      }
      break;

    case "ArrowRight":
      if (player.x + player.w < 700) {
        player.speedX += 1;
      } else {
        player.x = 540;
      }
      break;

    case "ArrowUp":
      player.jumping = true;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      player.speedX = 0;
      break;
    case "ArrowRight":
      player.speedX = 0;
      break;
  }
});
