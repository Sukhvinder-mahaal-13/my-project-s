const board = document.querySelector(".board");
const startButton =document.querySelector(".btn-start");
const modal = document.querySelector(".modal");

const startGameModal = document.querySelector(".start-game")
const gameOvermodal = document.querySelector(".game-over")
const restartButton =document.querySelector(".btn-restart")

const highScoreElement = document.querySelector(".high-score")
const scoreElement = document.querySelector("#score")
const timeElement = document.querySelector("#Time")

const blockWidth = 30;
const blockHeight = 30;

let highscore = 0
let score = 0
let time =`00-00`


const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
 
let IntervalId = null;
let food = {x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)}


board.style.gridTemplateColumns = `repeat(${cols}, ${blockWidth}px)`;
board.style.gridTemplateRows = `repeat(${rows}, ${blockHeight}px)`;

const blocks=[]
let snake =[{ 
    x:1,y:3


}]
let direction='right'

for (let row=0; row< rows; row++){
    for (let col=0; col<cols;col++){
    const block = document.createElement('div');
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText=`${row}-${col}`
    blocks[`${row}-${col}`]=block
    }

}
function render(){
    snake.forEach(segment=>{
       blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    })
}

let head = null 

startButton.addEventListener("click",()=>{
    modal.style.display="none"
    IntervalId=setInterval(()=>{


blocks[`${food.x}-${food.y}`].classList.add("food")
if(direction ==="left"){
    head = {x:snake[0].x, y:snake[ 0 ].y-1} 
}
 else if(direction ==="right"){
    head = {x:snake[0].x, y:snake[ 0 ].y+1} 

}
 else if(direction ==="down"){
   
        head ={y:snake[0].y,x:snake[0].x+1}
}
 else if(direction ==="up"){
   
        head ={y:snake[0].y,x:snake[0].x-1}
}
if(head.x<0|| head.x>=rows||head.y<0||head.y>=cols){
    clearInterval(IntervalId)
    modal.style.display ="flex" 
    startGameModal.style.display="none"
    gameOvermodal.style.display="flex"
    return;
}

if(head.x == food.x && head.y == food.y){
    
blocks[`${food.x}-${food.y}`].classList.remove("food")
 food = {x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)}
 blocks[`${food.x}-${food.y}`].classList.add("food")
 snake.unshift(head)
}

snake.forEach(segment=>{
     blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
})

snake.unshift(head)
snake.pop()

  render()},300);

})

restartButton.addEventListener("click",restartGame)

function restartGame(){

blocks[`${food.x}-${food.y}`].classList.remove("food")
snake.forEach(segment=>{
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
})

    snake =[{ 
    x:1,y:3}]
    food = {x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)}
 

    direction="right"
 modal.style.display="none"
    IntervalId=setInterval(()=>{


blocks[`${food.x}-${food.y}`].classList.add("food")
if(direction ==="left"){
    head = {x:snake[0].x, y:snake[ 0 ].y-1} 
}
 else if(direction ==="right"){
    head = {x:snake[0].x, y:snake[ 0 ].y+1} 

}
 else if(direction ==="down"){
   
        head ={y:snake[0].y,x:snake[0].x+1}
}
 else if(direction ==="up"){
   
        head ={y:snake[0].y,x:snake[0].x-1}
}
// wall collision logic  

if(head.x<0|| head.x>=rows||head.y<0||head.y>=cols){
    clearInterval(IntervalId)
    modal.style.display ="flex" 
    startGameModal.style.display="none"
    gameOvermodal.style.display="flex"
    return;
}


// food consume logic

if(head.x == food.x && head.y == food.y){
    
blocks[`${food.x}-${food.y}`].classList.remove("food")
 food = {x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)}
 blocks[`${food.x}-${food.y}`].classList.add("food")
 snake.unshift(head)

 score +=1
 scoreElement.innerText = score

 if(score>highscore){

    highscore=score
 }
}

snake.forEach(segment=>{
     blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
})

snake.unshift(head)
snake.pop()

  render()},300);




}




addEventListener("keydown",(event)=>{
    if(event.key=="ArrowUp"){
direction="up"
    }
   else   if(event.key=="ArrowDown"){
direction="down"
    }
    else   if(event.key=="ArrowLeft"){
direction="left"
    }
    else   if(event.key=="ArrowRight"){
direction="right"
    }
})