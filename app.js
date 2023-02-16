let character = document.getElementById("character")
let block =  document.getElementById("block")
let score = document.getElementById("score")
let gameOver = document.getElementById("gameOver")
let _score = 0 ;
let scoreInterval =  null
document.addEventListener("keyup", function(event){
    if(event.keyCode != 38) return
    if(!character.classList.contains("animate")){
        character.classList.add("animate")
    }
    setTimeout(()=>{
        character.classList.remove("animate")

    },500)
})
let checkGameOver =  setInterval(() => {
    let characterTop =  parseInt(window.getComputedStyle(character).
    getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue("left"))
    if(blockLeft < 75 && blockLeft > 50 && characterTop >= 130){
        gameOver.classList.add("show")
        clearInterval(scoreInterval)
        character.remove()
        block.remove()
    }  
},10)
setTimeout(()=>{
    scoreInterval = setInterval(()=>{
        _score++;
        score.innerHTML = _score
    },100)
},1000)    
 