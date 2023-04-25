
updateBonus(){
    let originalY = 0;
    for (let i = 0; i<this.enemies.length; i++){
        // enemies's y ++
        this.enemies[i].y +=1; 
        // enemies' draw function
        this.enemies[i].draw();
    }
    // each 2 seconds, a enemy is updated
    if(this.frames % 200 === 0){
        let minWidth = 50; // at least of 50px of width
        let maxWidth = 400; // max width of 400px

        let width = Math.floor(Math.random()*(maxWidth - minWidth + 1) + minWidth);

        let randomX = Math.floor(Math.random() * width);

        this.enemies.push(new Component(randomX, originalY, width, 40, false, 'brown', this.ctx))
    }
}