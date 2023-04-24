console.log("JS is on!");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Homer(
  (canvas.width / 2) - 35,
  canvas.height - 80,
  70,
  80,
  true,
  null,
  ctx
);
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
    game.createBackground();
  }
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      player.speedX -= 1;
      break;

    case "ArrowRight":
      player.speedX += 1;
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
