//enemies
let crash1 = new Audio("../sounds/HELL_WITH_THIS.mp3");
crash1.loop = false;

let crash2 = new Audio("../sounds/SCREAM.mp3");
crash2.loop = false;

//homer
let happyHomer= new Audio("../sounds/THANK_YOU.mp3");
happyHomer.loop = false;

let beerIsBeer = new Audio("../sounds/THAT'S_RIGHT.mp3");
beerIsBeer.loop = false;

let donutsIsGood = new Audio("../sounds/WO_HOY.mp3");
donutsIsGood.loop = false;




/*
the following code is addded at the action for example:

crashWith(enemy) {
    return (
      this.top() < enemy.bottom() &&
      this.right() > enemy.left() &&
      this.left() < enemy.right() &&
      this.bottom() > enemy.top()
      crash1.play();
      
    );
  }
*/



crash1.play(); 
crash2.play();  
happyHomer.play();
beerIsBeer.play();
donutsIsGood.play();


