
// need to upload the images 

updateBonus(){
   
    let originalY = 0;
    for (let i = 0; i<this.bonus.length; i++){
        // enemies's y ++
        this.bonus[i].y +=1; 
        // enemies' draw function
        this.bonus[i].draw();
    }
    // each 2 seconds, a enemy is updated
    if(this.frames % 200 === 0){
        let minWidth = 50; // at least of 50px of width
        let maxWidth = 400; // max width of 400px

        let width = Math.floor(Math.random()*(maxWidth - minWidth + 1) + minWidth);

        let randomX = Math.floor(Math.random() * width);

        this.bonus.push(new Component(randomX, originalY, width, 40, false, 'brown', this.ctx))
    }


}

getBonus(bonus2){
    return(this.top()<bonus2.bottom()&&
    this.right()>bonus2.left()&&
    this.left()<bonus2.right()&&
    this.bottom()>bonus2.top())
}


checkBonus(){
    const bonusUp = this.bonus.some((bonus)=>{
        return this.player.getBonus(bonus);
    })
    if(bonusUp){
    
    
        this.ctx.fillText(`${this.score}`);
       
    }
}


//score - not sure if it works
let score = 0;
function drawScore(){
    ctx.font = "16px Helvetica";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${score}`, 8, 20);
}

function collisionDetection(){
    for (let c = 0; c < bonusCount; c++){
        const b = bonus[c];
        if (b.status === 1){
            if (
                x > b.x &&
                x < b.x + bonusWidth &&
                y > b.y &&
                y < b.y + bonusHeight
            ){
                dy = -dy;
                b.status = 0;
                score++;
            }
        }
    }
}
